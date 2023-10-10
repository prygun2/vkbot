import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import Env from "@ioc:Adonis/Core/Env"

export default class CheckSecret {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const secretFromRequest: { secret: any } = request.only(["secret"])
    console.log(`secretFromRequest:`, secretFromRequest)
    const secret = Env.get("CALLBACK_SECRET")
    console.log(`secret:`, secret)

    if (secretFromRequest.secret !== secret) {
      return response.status(400).send("Error request: secret is not ok")
    }

    await next()
  }
}
