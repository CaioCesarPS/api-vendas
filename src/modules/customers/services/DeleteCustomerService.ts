import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomerRepostory from '@modules/customers/typeorm/repositories/CustomersRepository';
interface IRequest {
  id: string;
}
class DeleteProfileService {
  public async execute({ id }: IRequest): Promise<void> {
    const customersRepostory = getCustomRepository(CustomerRepostory);

    const customer = await customersRepostory.findById(id);

    if (!customer) {
      throw new AppError('User not found');
    }

    await customersRepostory.remove(customer);
  }
}

export default DeleteProfileService;
