import { Controller, Post, Body } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

@Controller("confirmation")
export class ConfirmationController {
  constructor(private configService: ConfigService) {}

  @Post()
  get(@Body() body: any): string {
    console.log(body) // Здесь вы можете увидеть отправленные данные

    const groupId = this.configService.get("GROUP_ID")

    if (body.type === "confirmation" && String(body.group_id) === groupId) {
      return "OK"
    }

    return "Error"
  }
}
