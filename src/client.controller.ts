import { Controller, HttpStatus } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { ClientService } from './services/client.service'

import { ClientType } from './types/client.type'

@Controller('/clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @MessagePattern('client_create')
  public async createClient(clientDto: ClientType) {
    const createClientResponse = await this.clientService.createClient(clientDto)

    return {
      client: createClientResponse,
      error: null,
      status: HttpStatus.CREATED,
    }
  }
}
