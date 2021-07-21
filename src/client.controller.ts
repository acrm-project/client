import { Controller, HttpStatus } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { ClientService } from './services/client.service'

import { IFindClientByIdResponse } from './interfaces/find-client-by-id-response.interface'
import { IFindClientBySearchQueryResponse } from './interfaces/find-client-by-search-query-response.interface'
import { IClient } from './interfaces/client.interface'

import { clientId } from './types/client-id.type'
import { ClientType } from './types/client.type'
import { Errors } from './types/common/errors.enum'

@Controller('/clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @MessagePattern('client_create')
  async createClient(createClientDto: ClientType) {
    const clientDbInstance: IClient = await this.clientService.createClient(createClientDto)

    return {
      client: clientDbInstance,
      status: HttpStatus.CREATED,
      error: null,
    }
  }

  @MessagePattern('client_find_by_id')
  async findClientById(id: clientId) {
    let findClientByIdResponse: IFindClientByIdResponse

    const clientDbResponse = await this.clientService.findClientById(id)

    if (!clientDbResponse) {
      findClientByIdResponse = {
        status: HttpStatus.NOT_FOUND,
        error: Errors.NO_CLIENT_BY_ID,
      }

      return findClientByIdResponse
    }

    findClientByIdResponse = {
      client: clientDbResponse,
      status: HttpStatus.OK,
    }

    return findClientByIdResponse
  }

  @MessagePattern('client_find_by_search_query')
  async findClientBySearchQuery(query: string) {
    let findClientBySearchQueryResponse: IFindClientBySearchQueryResponse

    const clientDbResponse = await this.clientService.findClientBySearchQuery(query)

    if (!clientDbResponse) {
      findClientBySearchQueryResponse = {
        status: HttpStatus.NOT_FOUND,
        error: Errors.NO_CLIENT_BY_ID,
      }

      return findClientBySearchQueryResponse
    }

    findClientBySearchQueryResponse = {
      client: clientDbResponse,
      status: HttpStatus.OK,
    }

    return findClientBySearchQueryResponse
  }
}
