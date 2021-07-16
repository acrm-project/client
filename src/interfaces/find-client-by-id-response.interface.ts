import { HttpStatus } from '@nestjs/common'
import { ClientType } from 'src/types/client.type'

export interface IFindClientByIdResponse {
  client?: ClientType
  status: HttpStatus
  error?: string | null
}
