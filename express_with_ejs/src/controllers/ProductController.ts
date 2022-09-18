import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/Product';
import Database from '../data/config-db';
class ProductController {
    //[GET] /product
    async listProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const list: Product[] = await Database.getAllList();
            res.render('list', { list });
        } catch (err) {
            next(err);
        }
    }
}

export default new ProductController();
