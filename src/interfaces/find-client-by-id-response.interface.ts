import { HttpStatus } from '@nestjs/common'
import { Error } from 'src/types/common/error.type'
import { IClient } from './client.interface'

export interface IFindClientByIdResponse {
  client?: IClient
  status: HttpStatus
  error?: Error
}
