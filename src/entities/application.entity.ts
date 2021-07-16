import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { ClientEntity } from './client.entity'

@Entity()
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany((type) => ClientEntity, (client) => client)
  @JoinColumn({ name: 'clientId' })
  client: ClientEntity

  @Column({ type: 'json' })
  vehicle: any

  @Column({ type: 'json' })
  issues: any

  @Column()
  status: string

  @Column()
  startedAt: string

  @Column()
  closedAt: string

  @Column()
  closed: string
}
