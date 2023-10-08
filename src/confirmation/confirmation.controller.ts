import {Controller, Post, Body} from '@nestjs/common';
import * as process from "process";

@Controller('confirmation')
export class ConfirmationController {
    @Post()
    createPost(@Body() body: any): string {
        console.log(body); // Здесь вы можете увидеть отправленные данные

        if (body.type === 'confirmation' && body.group_id === process.env.GROUP_ID) {
            return 'OK'
        }

        return 'Error';
    }
}
