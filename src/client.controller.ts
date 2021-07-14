import { Controller, Get } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

@Controller('/clients')
export class ClientController {
  constructor() {}

  @MessagePattern('test')
  test(data: string) {
    return data.toUpperCase()
  }
}
