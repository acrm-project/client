import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'

import { ClientEntity } from 'src/entities/client.entity'

import { ClientType } from '../types/client.type'
import { clientId } from 'src/types/client-id.type'

@Injectable()
export class ClientService {
  constructor(@InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) {}

  public async createClient(clientDto: ClientType) {
    const dbClientInstance = this.clientRepository.create(clientDto)
    return this.clientRepository.save(dbClientInstance)
  }

  public async findClientById(id: clientId) {
    const dbClientInstance = await this.clientRepository.findOne(id)

    return dbClientInstance
  }

  /* 
    prepare query for query builder
  */
  private _prepareQuery(query: string) {
    return query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()
  }

  public async findClientBySearchQuery(query: string) {
    const result = await getConnection()
      .getRepository(ClientEntity)
      .createQueryBuilder('client')
      .where(
        `client.surname = :query OR
         client.name = :query OR
         client.phoneNumber = :query`,
        { query: this._prepareQuery(query) },
      )
      .getMany()

    return result
  }
}
