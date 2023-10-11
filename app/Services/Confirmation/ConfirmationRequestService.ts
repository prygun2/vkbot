import config from "App/Services/Confirmation/config"

export default class ConfirmationRequestService {
  /**
   * Обрабатывает входящий запрос.
   *
   * @return строка ответа.
   */
  async process(): Promise<string> {
    return config.confirmationCode
  }
}
