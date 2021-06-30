import { Request, Response } from 'express';
import { Roles, RolesInterface } from '../models/roles';

export class RolesService {
  /**
   * Get all roles ✅
   */
  public getAllRoles(_req: Request, res: Response) {
    Roles.findAll<Roles>()
      .then((roles: Array<Roles>) => res.json(roles))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Get one role ✅
   */
  public getOneRole(req: Request, res: Response) {
    const roleId: any = req.query.id_role;

    Roles.findByPk<Roles>(roleId)
      .then((role: Roles | null) => {
        if (role) {
          res.json(role);
        } else {
          res.status(404).json({ errors: ['Link not found'] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Create role ✅
   */
  public createNewRole(req: Request, res: Response) {
    const params: RolesInterface = req.body;

    Roles.create<Roles>(params)
      .then((role: Roles) => res.status(201).json(role))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Update role ✅
   */
  public updateRole(req: Request, res: Response) {
    const id_role: any = req.query.id_role;
    const params: RolesInterface = req.body;

    Roles.update(params, {
      where: { id_role: id_role },
      limit: 1,
    })
      .then(() => res.status(202).json({ data: 'success' }))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Delete role ❌
   */
  public deleteRole(req: Request, res: Response) {
    const id_role: any = req.query.id_role;

    Roles.destroy({
      where: { id_role: id_role },
      limit: 1,
    })
      .then(() => res.status(204).json({ data: 'success' }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
