import Koa from 'koa';
import json from 'koa-json';
import fridge from './fridge/';

const app = new Koa();

//app.use(json({ pretty: false, param: 'pretty' }));
//console.log(fridge.routes());

app.use(fridge.routes());

export default app;
