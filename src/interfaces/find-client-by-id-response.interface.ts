import { HttpStatus } from '@nestjs/common'
import { IClient } from './client.interface'

export interface IFindClientByIdResponse {
  client?: IClient
  status: HttpStatus
  error?: string | null
}
