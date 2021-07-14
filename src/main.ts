import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { ClientModule } from './client.module'

import { ConfigService } from './services/config/config.service'

const configService = new ConfigService()

async function bootstrap() {
  const clientMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(ClientModule, {
    transport: Transport.TCP,
    options: {
      host: configService.get('host'),
      port: configService.get('port'),
    },
  })

  clientMicroservice.listen(() => console.log('Client microservice is listening...'))
}
bootstrap()
