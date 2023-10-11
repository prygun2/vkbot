import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Env from "@ioc:Adonis/Core/Env"

const INVALID_SECRET_MESSAGE = "Group ID is not correct"

export default class CheckGroupId {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const groupIdFromRequest: number = request.input("group_id")
    const groupId: number = Env.get("GROUP_ID") as number

    if (groupIdFromRequest !== groupId) {
      return response.status(400).send(INVALID_SECRET_MESSAGE)
    }

    await next()
  }
}
