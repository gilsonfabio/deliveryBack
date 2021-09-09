const express = require('express');
const routes = express.Router();

const UfsController = require('./controllers/UfsController');
const CitysController = require('./controllers/CitysController');
const DistrictsController = require('./controllers/DistrictsController');
const UsersController = require('./controllers/UsersController');
const CategorysController = require('./controllers/CategorysController');
const DeliverysController = require('./controllers/DeliverysController');
const CatDeliveryController = require('./controllers/CatDeliveryController');
const ProductsController = require('./controllers/ProductsController');
const AddicionalsController = require('./controllers/AddicionalsController');
const AddProductsController = require('./controllers/AddProductsController');
const CouriersController = require('./controllers/CouriersController');
const CommandsController = require('./controllers/CommandsController');
const IteCommandsController = require('./controllers/IteCommandsController');
const AddCommandsController = require('./controllers/AddCommandsController');
const WorkersController = require('./controllers/WorkersController');
const PromocoesController = require('./controllers/PromocoesController');
const LoginController = require('./controllers/LoginController');
const TokenController = require('./controllers/TokenController');

routes.get('/ufs', UfsController.index);
routes.post('/ufs', UfsController.create);

routes.get('/citys', CitysController.index);
routes.post('/citys', CitysController.create);

routes.get('/districts', DistrictsController.index);
routes.post('/districts', DistrictsController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

//routes.get('/signIn/:user/:senha', DeliverysController.signIn);
routes.get('/signIn/:email/:password', DeliverysController.signIn);

routes.get('/categorys', CategorysController.index);
routes.post('/categorys', CategorysController.create);

routes.get('/deliverys', DeliverysController.index);
routes.post('/deliverys', DeliverysController.create);

routes.get('/catdeliverys/:catId', DeliverysController.list);

routes.get('/catdelivery', CatDeliveryController.index);
routes.post('/catdelivery', CatDeliveryController.create);

routes.get('/products/:lojaId', ProductsController.index);

routes.post('/newproducts', ProductsController.newcreate);

routes.get('/addicionals', AddicionalsController.index);
routes.post('/addicionals', AddicionalsController.create);

routes.get('/addproduct/:productId', AddProductsController.index);
routes.post('/addproducts', AddProductsController.create);

routes.get('/couriers/:couId', CouriersController.login);
routes.post('/couriers', CouriersController.create);

routes.get('/commands', CommandsController.index);
routes.post('/commands', CommandsController.create);

routes.get('/vercommands/:userId', CommandsController.search);

routes.get('/shopping/:cmdId', IteCommandsController.shopping);
routes.get('/shopcommand/:cmdId', IteCommandsController.header);

routes.get('/atucommands/:lojaId', CommandsController.atualiza);
routes.get('/commandItems/:commandId', CommandsController.commandItems);

routes.post('/fimPreparo/:commandId/:datPreparo', CommandsController.fimPreparo);

routes.get('/itecommands', IteCommandsController.index);
routes.post('/itecommands/:cmdId', IteCommandsController.create);
routes.put('/itecommands/:cmdId', IteCommandsController.update);
routes.delete('/itecommands/:cmdId/:itcId', IteCommandsController.delete);

routes.get('/promocoes', PromocoesController.index);
routes.post('/promocoes', PromocoesController.create);

routes.get('/addcommands', AddCommandsController.index);
routes.post('/addcommands', AddCommandsController.create);

routes.get('/workers', WorkersController.index);
routes.post('/workers', WorkersController.create);

routes.get('/login/:email/:senha', LoginController.login);

routes.get('/token', TokenController.index);
routes.post('/token', TokenController.create);


module.exports = routes;
