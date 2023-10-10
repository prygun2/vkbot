import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Env from "@ioc:Adonis/Core/Env"

const INVALID_SECRET_MESSAGE = "Bad request"

export default class CheckSecret {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const secretFromRequest: string = request.input("secret")
    const secret: string = Env.get("CALLBACK_SECRET") as string

    if (secretFromRequest !== secret) {
      return response.status(400).send(INVALID_SECRET_MESSAGE)
    }

    await next()
  }
}
