import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ClientController } from './client.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ConfigService } from './services/config/config.service'
import { ClientService } from './services/client.service'

import { ClientEntity } from './entities/client.entity'

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientController],
  providers: [ConfigService, ClientService],
})
export class ClientModule {}
