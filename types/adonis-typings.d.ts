import { ConfirmationRequestService } from "App/Services/Confirmation/ConfirmationRequestService"

declare module "@ioc:Adonis/Core/Request" {
  interface RequestContract {
    serviceInstance?: RequestService
  }
}
