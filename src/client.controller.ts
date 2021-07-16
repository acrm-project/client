import { Controller, HttpStatus } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { ClientService } from './services/client.service'

import { IFindClientByIdResponse } from './interfaces/find-client-by-id-response.interface'
import { IClient } from './interfaces/client.interface'

import { clientId } from './types/client-id.type'
import { ClientType } from './types/client.type'

@Controller('/clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @MessagePattern('client_create')
  public async createClient(createClientDto: ClientType) {
    const clientDbInstance: IClient = await this.clientService.createClient(createClientDto)

    return {
      client: clientDbInstance,
      status: HttpStatus.CREATED,
      error: null,
    }
  }

  @MessagePattern('client_find_by_id')
  public async findClientById(id: clientId) {
    let findClientByIdResponse: IFindClientByIdResponse

    const clientDbResponse = await this.clientService.findClientById(id)

    if (!clientDbResponse) {
      findClientByIdResponse = {
        status: HttpStatus.NOT_FOUND,
        error: 'Cannot find client with given identifier',
      }

      return findClientByIdResponse
    }

    findClientByIdResponse = {
      client: clientDbResponse,
      status: HttpStatus.OK,
    }

    return findClientByIdResponse
  }
}
