import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"

export default class CallbackVkController {
  async run({ request, response }: HttpContextContract) {
    const data = request.all()
    const service = data.serviceInstance

    let result

    try {
      result = await service.process(data)
    } catch (e) {
      console.log(`e:`, e)
      return response.status(400).send(e.message)
    }

    return response.status(200).send(result)
  }
}
