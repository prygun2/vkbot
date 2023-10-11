import VKApiFriendService from "App/API/Friends/VKApiFriendService"

export default class CheckFriendsCity {
  static async getStatistic(userId, cityId) {
    const friends = await VKApiFriendService.getWithCity(userId)

    // Всего друзей
    const allFriendsCount = friends.length

    const cityIds = friends.filter(user => user.city).map(user => user.city.id)

    // Количество друзей у которых указан город
    const withCityCount: number = cityIds.length

    // Количество друзей с требуемым городом
    const withCorrectCityCount: number = cityIds.filter(
      id => id === cityId,
    ).length

    // Процент друзей с требуемым городом (относительно всех друзей у которых указан город)
    const withCorrectCityPercent: number = Number(
      ((withCorrectCityCount * 100) / withCityCount).toFixed(0),
    )

    return {
      allFriendsCount,
      withCityCount,
      withCorrectCityCount,
      withCorrectCityPercent,
    }
  }

  // Доверенный ли пользователь с данными о друзьях cityData?
  static isUserTrusted(
    cityData: { withCorrectCityPercent: number },
    minPercentFriendsWithCorrectCity: number,
  ): boolean {
    return cityData.withCorrectCityPercent >= minPercentFriendsWithCorrectCity
  }
}
