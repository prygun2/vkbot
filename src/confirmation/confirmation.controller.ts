import {Controller, Post, Body} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Controller('confirmation')
export class ConfirmationController {
    constructor(private configService: ConfigService) {
    }

    @Post()
    createPost(@Body() body: any): string {
        console.log(body);

        const groupId = this.configService.get('GROUP_ID');

        if (body.type === 'confirmation' && String(body.group_id) === groupId) {
            return 'OK'
        }

        return 'Error';
    }
}
