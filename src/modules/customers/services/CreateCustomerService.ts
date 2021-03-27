import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '@modules/customers/typeorm/entities/Customer';
import CustomerRepostory from '@modules/customers/typeorm/repositories/CustomersRepository';
interface ICustomer {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({
    name,
    email,
  }: ICustomer): Promise<Customer | undefined> {
    const customerRepostory = getCustomRepository(CustomerRepostory);

    const emailExists = await customerRepostory.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const customer = customerRepostory.create({
      name,
      email,
    });

    await customerRepostory.save(customer);
    return customer;
  }
}

export default CreateCustomerService;
