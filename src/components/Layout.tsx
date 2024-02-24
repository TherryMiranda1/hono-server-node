import { html } from "hono/html"

interface SiteData {
    title: string
    description: string
    image: string
    children?: any
}
const HtmlLayout = (props: SiteData) => html`
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${props.title}</title>
    <meta name="description" content="${props.description}">
    <head prefix="og: http://ogp.me/ns#">
    <meta property="og:type" content="article">
    <!-- More elements slow down JSX, but not template literals. -->
    <meta property="og:title" content="${props.title}">
    <meta property="og:image" content="${props.image}">
  </head>
  <body>
    ${props.children}
  </body>
  </html>
  `

export const Layout = (props: { siteData: SiteData; component: JSX.Element }) => (
    <HtmlLayout {...props.siteData}>
        <main class={}>
            {props.component}
        </main>
    </HtmlLayout>
)