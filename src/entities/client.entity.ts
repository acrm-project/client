import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { ApplicationEntity } from './application.entity'

@Entity()
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

  @OneToMany((type) => ApplicationEntity, (application) => application)
  applications: ApplicationEntity[]
}
