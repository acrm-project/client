import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ClientEntity } from 'src/entities/client.entity'
import { Repository } from 'typeorm'

import { ClientType } from '../types/client.type'

@Injectable()
export class ClientService {
  constructor(@InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) {}

  public async createClient(clientDto: ClientType) {
    const dbClientInstance = this.clientRepository.create(clientDto)
    const createdClient = this.clientRepository.save(dbClientInstance)

    return createdClient
  }
}
