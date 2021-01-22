import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '@modules/users/typeorm/repositories/UsersRepositories';
import UsersTokensRepository from '@modules/users/typeorm/repositories/UsersTokensRepository';
import EtherealMail from '@config/mail/EtherealMail';
interface IRequest {
  email: string;
}

class CreateUserService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UsersTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User not found');
    }

    // console.log(user);

    const userToken = await userTokenRepository.generate(user.id);

    // console.log(userToken);
    await EtherealMail.sendMail({
      to: email,
      body: `Solicitação de redefinição de senha recebida ${userToken.token}`,
    });
  }
}

export default CreateUserService;
