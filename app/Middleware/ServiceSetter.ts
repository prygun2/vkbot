import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import ConfirmationRequestService from "App/Services/Confirmation/ConfirmationRequestService"
import GroupJoinRequestService from "App/Services/GroupJoin/GroupJoinRequestService"

const ERROR_TYPE = "The callback type is not correct"

export default class ServiceSetter {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const type = request.input("type")

    let service

    switch (type) {
      case "confirmation":
        service = new ConfirmationRequestService()
        break
      case "group_join":
        service = new GroupJoinRequestService()
        break
      default:
        throw new Error(ERROR_TYPE)
    }

    request.updateBody({ ...request.all(), ...{ serviceInstance: service } })

    await next()
  }
}
