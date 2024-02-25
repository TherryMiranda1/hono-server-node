import { Hono } from 'hono'
import routes from './routes';
import { cache } from 'hono/cache';

const app = new Hono()

// app.get(
//   '*',
//   cache({
//     cacheName: 'cache-server-10',
//     cacheControl: 'max-age=3600',
//   })
// )

app.route("/", routes);

export default app
