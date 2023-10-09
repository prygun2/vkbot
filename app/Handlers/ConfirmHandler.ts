import Env from "@ioc:Adonis/Core/Env"

export default class ConfirmHandler {
  public async run(data: any) {
    if (data.group_id === Env.get("GROUP_ID")) {
      return Env.get("CONFIRMATION_CODE")
    }
  }
}
