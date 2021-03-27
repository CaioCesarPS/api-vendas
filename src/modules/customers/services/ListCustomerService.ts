import { getCustomRepository } from 'typeorm';
import Customer from '@modules/customers/typeorm/entities/Customer';
import CustomerRepostory from '@modules/customers/typeorm/repositories/CustomersRepository';

class ListCustomersService {
  public async execute(): Promise<Customer[]> {
    const customerRepostory = getCustomRepository(CustomerRepostory);

    const customer = await customerRepostory.find();

    return customer;
  }
}

export default ListCustomersService;
