import VKBaseService from "App/API/VKBaseService"

const API_VERSION = "5.81"

export default class VKApiFriendService extends VKBaseService {
  public static async getById(
    userId: number,
    order: string,
    fields: string,
  ): Promise<any> {
    try {
      const response = await this.request("friends.get", API_VERSION, {
        user_id: userId,
        order,
        fields,
      })

      return response.items
    } catch (error) {
      console.error("Error fetching user from VK API:", error)
      throw new Error("Failed to fetch user from VK API")
    }
  }

  public static async getWithCity(userId) {
    return await this.getById(userId, "hints", "city")
  }
}
