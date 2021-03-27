import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '@modules/customers/typeorm/entities/Customer';
import CustomerRepostory from '@modules/customers/typeorm/repositories/CustomersRepository';
interface IRequest {
  id: string;
}
class ShowProfileService {
  public async execute({ id }: IRequest): Promise<Customer | undefined> {
    const customersRepostory = getCustomRepository(CustomerRepostory);

    const customer = await customersRepostory.findById(id);

    if (!customer) {
      throw new AppError('User not found');
    }

    return customer;
  }
}

export default ShowProfileService;
