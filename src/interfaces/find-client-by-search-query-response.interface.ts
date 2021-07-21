import { HttpStatus } from '@nestjs/common'
import { Error } from 'src/types/common/error.type'
import { IDbClient } from '../entities/client.entity'

export interface IFindClientBySearchQueryResponse {
  client?: any
  status: HttpStatus
  error?: Error
}
