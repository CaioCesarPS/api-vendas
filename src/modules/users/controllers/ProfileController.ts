import { Request, Response } from 'express';
import showProfileService from '@modules/users/services/ShowProfileService';
import UpdateProfileUserService from '@modules/users/services/UpdateProfileService';
import DeleteUserService from '../services/DeleteUserService';

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }
}
