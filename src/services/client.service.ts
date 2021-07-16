import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ClientEntity } from 'src/entities/client.entity'
import { Repository } from 'typeorm'

import { ClientType } from '../types/client.type'
import { clientId } from 'src/types/client-id.type'

@Injectable()
export class ClientService {
  constructor(@InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) {}

  public async createClient(clientDto: ClientType) {
    const dbClientInstance = this.clientRepository.create(clientDto)
    const createdClient = await this.clientRepository.save(dbClientInstance)

    return createdClient
  }

  public async findClientById(id: clientId) {
    const dbClientInstance = await this.clientRepository.findOne(id)

    return dbClientInstance
  }
}
