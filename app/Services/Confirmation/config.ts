import Env from "@ioc:Adonis/Core/Env"

export default {
  groupId: Env.get("GROUP_ID") as number,
  confirmationCode: Env.get("CONFIRMATION_STRING") as string,
}
