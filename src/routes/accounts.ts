import express from 'express';
import { Request, Response } from 'express';
import { UsersService } from '../controllers/usersController';
import { CitiesService } from '../controllers/citiesController';
import { RolesService } from '../controllers/rolesController';

const routerSQL = express.Router();

const usersService = new UsersService();
const citiesService = new CitiesService();
const rolesService = new RolesService();

/**
 * User functionalities
 */
routerSQL.get('/user/', (req: Request, res: Response) => {
  usersService.getOneUser(req, res);
});
routerSQL.get('/user/email/', (req: Request, res: Response) => {
  usersService.getUserWithEmail(req, res);
});
routerSQL.put('/user/', (req: Request, res: Response) => {
  usersService.updateUser(req, res);
});

/**
 * Roles functionalities
 */
routerSQL.get('/role/all/', (req: Request, res: Response) => {
  rolesService.getAllRoles(req, res);
});
routerSQL.get('/role/one/', (req: Request, res: Response) => {
  rolesService.getOneRole(req, res);
});
routerSQL.post('/role/', (req: Request, res: Response) => {
  rolesService.createNewRole(req, res);
});
routerSQL.put('/role/', (req: Request, res: Response) => {
  rolesService.updateRole(req, res);
});

/**
 * Cities functionalities
 */
routerSQL.get('/city/all/', (req: Request, res: Response) => {
  citiesService.getAllCities(req, res);
});
routerSQL.get('/city/one/', (req: Request, res: Response) => {
  citiesService.getOneCity(req, res);
});
routerSQL.post('/city/', (req: Request, res: Response) => {
  citiesService.createNewCity(req, res);
});
routerSQL.put('/city/', (req: Request, res: Response) => {
  citiesService.updateCity(req, res);
});

module.exports = routerSQL;
