import VKBaseService from "App/API/VKBaseService"

const API_VERSION = "5.89"

export default class VKApiUserService extends VKBaseService {
  public static async getById(userId: number, fields: string): Promise<any> {
    try {
      const response = await this.request("users.get", API_VERSION, {
        user_ids: userId,
        fields,
      })
      return response?.[0]
    } catch (error) {
      console.error("Error fetching user from VK API:", error)
      throw new Error("Failed to fetch user from VK API")
    }
  }

  public static async getWithCity(userId) {
    return this.getById(userId, "city")
  }
}
