import VKBaseService from "App/API/VKBaseService"
import config from "App/API/config"

const API_VERSION = "5.81"

export default class VKApiGroupService extends VKBaseService {
  static async approveRequestUser(userId: number) {
    return await this.request("groups.approveRequest", API_VERSION, {
      user_id: userId,
      group_id: config.groupId,
    })
  }

  static async rejectRequestUser(userId: number) {
    return await this.request("groups.removeUser", API_VERSION, {
      user_id: userId,
      group_id: config.groupId,
    })
  }
}
