import express from 'express';
import { Request, Response } from 'express';
import { AccountsService } from '../controllers/accountsController';

const routerSQL = express.Router();
const accountsService = new AccountsService();

/**
 * TODO: TO DELETE
 */
/* routerSQL.get('/', (req: Request, res: Response) => {
  accountsService.getAllUsers(req, res);
}); */

/**
 * TODO: TO DELETE
 */
routerSQL.post('/', (req: Request, res: Response) => {
  accountsService.createNewUser(req, res);
});

/**
 * TODO: TO DELETE
 */
routerSQL.get('/', (req: Request, res: Response) => {
  accountsService.getUser(req, res);
});

/**
 * Update user data ✅
 */
routerSQL.put('/', (req: Request, res: Response) => {
  accountsService.updateUser(req, res);
});

module.exports = routerSQL;
