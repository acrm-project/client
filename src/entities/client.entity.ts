import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('clients')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'varchar', length: 50 })
  name: string

  @Column({ nullable: false, type: 'varchar', length: 60 })
  surname: string

  @Column({ nullable: false, type: 'varchar', length: 60 })
  phoneNumber: string

  @Column({ nullable: true, type: 'varchar', length: 60 })
  email?: string
}

/*
  client interface for public using
*/

export interface IDbClient extends ClientEntity {}
