import Env from "@ioc:Adonis/Core/Env"

export default class RequestService {
  /**
   * Обрабатывает входящий запрос.
   *
   * @param data - данные из запроса.
   * @return строка ответа.
   */
  process(data: any): string {
    if (data.type === "confirmation") {
      return this.confirmationService(data)
    }

    return "ok"
  }

  /**
   * Обработка запроса подтверждения.
   *
   * @return строка для подтверждения.
   */
  private confirmationService(data): string {
    const groupId = Env.get("GROUP_ID")
    const confirmationString = Env.get("CONFIRMATION_STRING")

    if (data.group_id === groupId) {
      return confirmationString
    }

    return "ok"
  }
}
