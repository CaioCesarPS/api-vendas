import { Request, Response } from 'express';
import showProfileService from '@modules/users/services/ShowProfileService';
import UpdateProfileUserService from '@modules/users/services/UpdateProfileService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = new showProfileService();
    const user = await showProfile.execute({ user_id });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const updateUser = new UpdateProfileUserService();
    const update = await updateUser.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(update);
  }
}
