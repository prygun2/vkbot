import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import RequestService from "App/Services/RequestService"

export default class CallbackVkController {
  private requestService: RequestService

  constructor() {
    this.requestService = new RequestService()
  }

  async run({ request, response }: HttpContextContract) {
    const data = request.all()
    const result = this.requestService.process(data)

    return response.status(200).send(result)
  }
}
