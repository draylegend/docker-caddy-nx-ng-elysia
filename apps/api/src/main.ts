import Elysia from 'elysia';
import cors from '@elysiajs/cors';

new Elysia({ prefix: '/api' })
  .use(cors())
  .get('/hi', () => ({ msg: 'Hello from backend!' }))
  .listen(process.env['PORT'], ({ url }) => console.log(`🦊 ${url.href}`));
