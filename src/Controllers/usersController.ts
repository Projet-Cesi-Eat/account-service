import { Request, Response } from 'express';
import { Users, UsersInterface } from '../models/users';

export class UsersService {
  /**
   * Get All Users ❌
   */
  public getAllUsers(req: Request, res: Response) {
    Users.findAll<Users>()
      .then((users: Array<Users>) => res.status(200).json({ users }))
      .catch((err: Error) => res.status(500).json({ error: err }));
  }

  /**
   * Get one user ✅
   */
  public getOneUser(req: Request, res: Response) {
    const id_user: any = req.query.id_user;
    Users.findByPk<Users>(id_user)
      .then((users) => res.status(200).json({ users }))
      .catch((err: Error) => res.status(500).json({ error: err }));
  }

  /**
   * Get one user with email ✅
   */
  public getUserWithEmail(req: Request, res: Response) {
    const email: any = req.query.email;
    Users.findOne({ where: { email: email } })
      .then((user: Users | null) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ errors: ['User not found'] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Create new user ❌
   */
  public createNewUser(req: Request, res: Response) {
    const params: UsersInterface = req.body;
    Users.create<Users>(params)
      .then((users: Users) => res.status(201).json({ users }))
      .catch((err: Error) => res.status(500).json({ error: err }));
  }

  /**
   * Update user data ⚠️
   */
  public updateUser(req: Request, res: Response) {
    const params: UsersInterface = req.body;
    const id_user: any = req.query.id_user;

    console.log(params);
    console.log(id_user);
    Users.update(params, {
      where: {
        id_user: id_user,
      },
    })
      .then(() => res.status(201))
      .catch((err: Error) => res.status(500).json({ error: err }));
  }

  /**
   * Delete one user ❌
   */
  public deleteUser(req: Request, res: Response) {
    const id_user: any = req.query.id_user;

    Users.destroy({
      where: { id_user: id_user },
      limit: 1,
    })
      .then(() => res.status(202).json({ data: 'success Profil delete' }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
