import Env from "@ioc:Adonis/Core/Env"

export default {
  url: Env.get("VK_API_URL") as string,
  accessToken: Env.get("VK_API_ACCESS_TOKEN") as string,
  groupAccessToken: Env.get("VK_API_GROUP_ACCESS_TOKEN") as string,
  groupId: Env.get("GROUP_ID") as number,
}
