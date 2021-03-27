import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '@modules/customers/typeorm/entities/Customer';
import CustomerRepostory from '@modules/customers/typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateProfileService {
  public async execute({ id, name, email }: IRequest): Promise<Customer> {
    const customersRepostory = getCustomRepository(CustomerRepostory);

    const customer = await customersRepostory.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    const customerExists = await customersRepostory.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one customer with this email.');
    }

    customer.name = name;
    customer.email = email;

    await customersRepostory.save(customer);

    return customer;
  }
}

export default UpdateProfileService;
