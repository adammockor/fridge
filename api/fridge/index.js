import Router from 'koa-router';

const router = Router({
  prefix: '/api/fridge',
});

const users = [
  {product: '123', expiration: 'haha', id: 0},
  {product: '456', expiration: 'haha', id: 1},
  {product: '789', expiration: 'haha', id: 2},
];

router.get('/all', async (ctx, next) => {
  await next();
  ctx.body = users;
});

export default router;
