import { Request, Response } from 'express';
import { Cities, CitiesInterface } from '../models/cities';

export class CitiesService {
  /**
   * Get all cities ✅
   */
  public getAllCities(_req: Request, res: Response) {
    Cities.findAll<Cities>({})
      .then((cities: Array<Cities>) => res.json(cities))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Get one city ✅
   */
  public getOneCity(req: Request, res: Response) {
    const cityId: any = req.query.id_city;
    Cities.findByPk<Cities>(cityId)
      .then((city: Cities | null) => {
        if (city) {
          res.json(city);
        } else {
          res.status(404).json({ errors: 'Link not found' });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Create one city ✅
   */
  public createNewCity(req: Request, res: Response) {
    const params: CitiesInterface = req.body;
    Cities.create<Cities>(params)
      .then((city: Cities) => res.status(201).json(city))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Update one city ✅
   */
  public updateCity(req: Request, res: Response) {
    const id_city: any = req.query.id_city;
    const params: CitiesInterface = req.body;

    Cities.update(params, {
      where: { id_city: id_city },
      limit: 1,
    })
      .then(() => res.status(202).json({ data: 'success' }))
      .catch((err: Error) => res.status(500).json(err));
  }

  /**
   * Delete one city ❌
   */
  public deleteCity(req: Request, res: Response) {
    const id_city: any = req.query.id_city;

    Cities.destroy({
      where: { id_city: id_city },
      limit: 1,
    })
      .then(() => res.status(204).json({ data: 'success' }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
