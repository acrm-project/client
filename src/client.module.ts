import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ClientController } from './client.controller'
import { ConfigService } from './services/config/config.service'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ClientController],
  providers: [ConfigService],
})
export class ClientModule {}
