import Elysia from 'elysia';
import cors from '@elysiajs/cors';

new Elysia()
  .use(cors())
  .get('/elysia-version', () => ({ version: '1.2.10' }))
  .listen(process.env['PORT'], ({ url }) => console.log(`🦊 ${url.href}`));
