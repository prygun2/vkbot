import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Env from "@ioc:Adonis/Core/Env"

export default class ConfirmationsController {
  public async confirm({ request }: HttpContextContract) {
    const { type, group_id } = request.body()

    if (type === "confirmation" && group_id === Env.get("GROUP_ID")) {
      return Env.get("CONFIRMATION_CODE")
    }

    return "not oke"
  }
}
