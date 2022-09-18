import express, { Express } from 'express';
import * as ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import productController from '../controllers/ProductController';

export default function (app: Express) {
    app.use(
        express.static('public', {
            maxAge: '1d',
            cacheControl: true,
        })
    );

    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));

    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'html');
    app.engine('.html', ejs.renderFile);

    app.use('/product', productController.listProduct);

    return app;
}
