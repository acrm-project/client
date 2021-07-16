import { HttpStatus } from '@nestjs/common'
import { ClientType } from 'src/types/client.type'

export interface ICreateClientResponse {
  client: ClientType
  status: HttpStatus
}
