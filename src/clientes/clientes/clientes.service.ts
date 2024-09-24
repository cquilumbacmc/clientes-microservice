// src/clientes/clientes.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { CreateClienteDto } from '../dto/create-cliente.dto';


@Injectable()
export class ClientesService {
    private readonly logger = new Logger(ClientesService.name); // Crear una instancia del Logger
  private clientes: CreateClienteDto[] = [];

  create(cliente: CreateClienteDto) {
    this.logger.log('Creando un nuevo cliente'); // Imprimir log
    this.clientes.push(cliente);
    this.logger.log(this.clientes.length + ' clientes');
    return cliente;
  }

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    return this.clientes.find(cliente => cliente.id === id);
  }

  update(id: number, cliente: CreateClienteDto) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      this.clientes[index] = cliente;
      return cliente;
    }
    return null;
  }

  remove(id: number) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      return this.clientes.splice(index, 1);
    }
    return null;
  }
}
