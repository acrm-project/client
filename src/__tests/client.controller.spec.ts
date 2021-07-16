import { Test } from '@nestjs/testing'

import { ClientController } from '../client.controller'
import { ClientService } from '../services/client.service'

import { returnedMockedClient } from './mockData'

describe('ClientController', () => {
  let clientController: ClientController

  const mockedClientService = {
    createClient: jest.fn(() => returnedMockedClient),
    findClientById: jest.fn(() => returnedMockedClient),
  }

  beforeEach(async () => {
    const controllerRef = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    })
      .overrideProvider(ClientService)
      .useValue(mockedClientService)
      .compile()

    clientController = controllerRef.get<ClientController>(ClientController)
  })

  it('should be defined', () => {
    expect(clientController).toBeDefined()
  })

  describe('createClient method', () => {
    it('should be defined', () => {
      expect(clientController.createClient).toBeDefined()
    })

    it('should accept clientDto and return client with given data', async () => {
      const createdClient = await clientController.createClient({
        name: 'John',
        surname: 'Doe',
        phoneNumber: '123321',
        email: '',
      })

      expect(createdClient.client).toEqual(returnedMockedClient)
      expect(createdClient.client.id).toBe(1)
    })

    describe('findClientById method', () => {
      it('should be defined', () => {
        expect(clientController.findClientById).toBeDefined()
      })

      it('should return client with given id', async () => {
        const returnedClient = await clientController.findClientById(1)

        expect(returnedClient.client).toEqual({
          id: 1,
          name: 'John',
          surname: 'Doe',
          phoneNumber: '123321',
          email: '',
        })
        expect(returnedClient.client.id).toBe(1)
      })
    })
  })
})
