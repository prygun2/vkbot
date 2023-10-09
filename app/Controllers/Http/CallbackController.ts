import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import CallbackHandler from "App/Handlers/CallbackHandler"

export default class CallbackController {
  public async run({ request, response }: HttpContextContract) {
    const body = request.all()

    const handler = new CallbackHandler(body.type)

    const instance = handler.getInstance()

    const resultData = await instance.run(body)

    return response.status(200).send(resultData)
  }
}
