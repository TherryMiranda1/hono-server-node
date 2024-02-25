import { Hono } from "hono";
import { paths } from "../paths/paths";
import { Home } from '../components/Home'
import { Layout } from "../components/Layout";
import { Transitions } from "../views/Transitions";

const routes = new Hono();

const props = {
    component: <Home />,
    siteData: {
        title: 'Hello <> World',
        description: 'This is a description',
        image: 'https://example.com/image.png',
    },
}

routes.get(paths.home, (c) => c.html(<Layout {...props} />));
routes.get(paths.projects, (c) => c.html(<Layout {...props} />));
routes.get(paths.about, (c) => c.html(<Layout {...props} />));
routes.get(paths.contact, (c) => c.html(<Layout {...props} />));

routes.get('/t4', (c) => c.html(<Layout {...props} component={<Transitions />} />))

export default routes;