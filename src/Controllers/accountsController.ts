import { Request, Response } from 'express';
import { Users, UsersInterface } from '../models/users';
import { Cities, CitiesInterface } from '../models/cities';

export class AccountsService {
  /**
   * Get All Users
   * TODO: TO DELETE
   */
  public getAllUsers(req: Request, res: Response) {
    Users.findAll<Users>()
      .then((users: Array<Users>) => res.status(200).json({ users }))
      .catch((err: Error) => res.status(400).json({ error: err }));
  }

  /**
   * TODO: TO DELETE
   */
  public createNewUser(req: Request, res: Response) {
    const params: UsersInterface = req.body;
    Users.create<Users>(params)
      .then((users: Users) => res.status(201).json({ users }))
      .catch((err: Error) => res.status(400).json({ error: err }));
  }

  /**
   * Get All Users
   * TODO: TO DELETE
   */
  public getUser(req: Request, res: Response) {
    const id_user = req.query.id_user;
    Users.findOne<Users>({
      where: {
        id_user: id_user,
      },
    })
      .then((users) => res.status(200).json({ users }))
      .catch((err: Error) => res.status(400).json({ error: err }));
  }

  /**
   * Update user data ✅
   */
  public updateUser(req: Request, res: Response) {
    const params: UsersInterface = req.body;
    const id_user = req.query.id_user;
    Users.update<Users>(params, {
      where: {
        id_user: id_user,
      },
    })
      .then(() => res.status(201))
      .catch((err: Error) => res.status(400).json({ error: err }));
  }

  /**
   * Add image or banner user
   */
  public addImage(req: Request, res: Response) {
    const params: UsersInterface = req.body;
    const id_user = req.query.id_user;
    Users.update<Users>(
      {},
      {
        where: {
          id_user: id_user,
        },
      }
    )
      .then(() => res.status(201))
      .catch((err: Error) => res.status(400).json({ error: err }));
  }
}
