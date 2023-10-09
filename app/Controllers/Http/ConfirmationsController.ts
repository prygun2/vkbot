import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Env from "@ioc:Adonis/Core/Env"

export default class ConfirmationsController {
  public async confirm({ request }: HttpContextContract) {
    const body = request.only(["type", "group_id"])

    const type: string = body.type
    const group_id: number = body.group_id

    if (type === "confirmation" && group_id === Env.get("GROUP_ID")) {
      return Env.get("CONFIRMATION_CODE")
    }

    return "not oke"
  }
}
