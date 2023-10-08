import { ConfigService } from "@nestjs/config";
export declare class ConfirmationController {
    private configService;
    constructor(configService: ConfigService);
    createPost(body: any): string;
}
