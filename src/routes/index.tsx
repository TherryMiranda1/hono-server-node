import { Hono } from "hono";
import { paths } from "../paths";
import { Home } from '../components/Home'
import { Layout } from "../components/Layout";

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

export default routes;