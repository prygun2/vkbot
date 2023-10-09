import ConfirmHandler from "App/Handlers/ConfirmHandler"

export default class CallbackHandler {
  private readonly type: string
  private readonly instance: any

  constructor(type) {
    this.type = type
    this.instance = this.getInstanceHandler()
  }

  private getInstanceHandler() {
    switch (this.type) {
      case "confirmation":
        return new ConfirmHandler()
    }
  }

  public getInstance() {
    return this.instance
  }
}
