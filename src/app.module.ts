import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfirmationController } from './confirmation/confirmation.controller';
import { ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ConfirmationController],
  providers: [AppService],
})
export class AppModule {}
