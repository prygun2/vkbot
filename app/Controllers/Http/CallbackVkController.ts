import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CallbackVkController {
  async run({ request, response }: HttpContextContract) {
    const data = request.all()
    console.log(`data:`, data);
    return response.status(200).json({test: 'ok'})
  }
}
