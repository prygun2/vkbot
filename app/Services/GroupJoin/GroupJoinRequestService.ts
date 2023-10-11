import CheckFriendsCity from "App/Handlers/CheckFriendsCity"
import Env from "@ioc:Adonis/Core/Env"
import VKApiGroupService from "App/API/Group/VKApiGroupService"

interface GroupJoinObject {
  user_id: number
  join_type: string
}

interface GroupJoinDataPayload {
  type: string
  object: GroupJoinObject
  group_id: number
}

const CORRECT_CITY_ID = Env.get("CORRECT_CITY_ID")
const MIN_PERCENT_FRIENDS_WITH_CORRECT_CITY = 15

export default class GroupJoinRequestService {
  /**
   * Обрабатывает входящий запрос.
   *
   * @param data - данные из запроса.
   * @return строка ответа.
   */
  async process(data: GroupJoinDataPayload): Promise<string> {
    // Проверка на 'join_type'
    if (data.object.join_type === "request") {
      // Получаем user_id и выполняем запрос в API
      const userId = data.object?.user_id

      const cityData = await CheckFriendsCity.getStatistic(
        userId,
        CORRECT_CITY_ID,
      )

      console.log(`cityData:`, cityData)

      const isUserTrusted: boolean = CheckFriendsCity.isUserTrusted(
        cityData,
        MIN_PERCENT_FRIENDS_WITH_CORRECT_CITY,
      )

      if (isUserTrusted) {
        // Добавляем в группу
        const result: { response: number } =
          await VKApiGroupService.approveRequestUser(userId)
        console.log(`result.response:`, result.response)
      } else {
        // Отклоняем заявку
        const result: { response: number } =
          await VKApiGroupService.rejectRequestUser(userId)
        console.log(`result.response:`, result.response)
      }
    }

    return "ok"
  }
}
