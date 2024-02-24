import { Style } from "hono/css"
import { globalClass } from "../styles"
import { Navbar } from "./Navbar/Navbar"
import { Layout } from "./Layout"
import { literals } from "../literals"



export const Home = (props: any) => (
    <div>

        <div className="landing-page">
            {/* Sección Hero */}
            <section className="hero">
                <h1>{literals.hero.title}</h1>
                <p>{literals.hero.subtitle}</p>
                <button>{literals.hero.cta}</button>
            </section>

            {/* Sección Proyectos */}
            <section className="proyectos">
                <h2>{literals.proyectos.title}</h2>
                <p>{literals.proyectos.description}</p>
                {/* Aquí puedes incluir la lista de proyectos */}
            </section>

            {/* Sección Artículos */}
            <section className="articulos">
                <h2>{literals.articulos.title}</h2>
                <p>{literals.articulos.description}</p>
                {/* Aquí puedes incluir la lista de artículos */}
            </section>

            {/* Sección Experiencia */}
            <section className="experiencia">
                <h2>{literals.experiencia.title}</h2>
                <p>{literals.experiencia.description}</p>
                {/* Aquí puedes incluir tu experiencia laboral */}
            </section>

            {/* Sección Tecnologías */}
            <section className="tecnologias">
                <h2>{literals.tecnologias.title}</h2>
                <p>{literals.tecnologias.description}</p>
                {/* Aquí puedes listar las tecnologías que utilizas */}
            </section>

            {/* Sección Sobre Mí */}
            <section className="sobre-mi">
                <h2>{literals.sobreMi.title}</h2>
                <p>{literals.sobreMi.description}</p>
                {/* Aquí puedes agregar información sobre ti */}
            </section>

            {/* Sección Contacto */}
            <section className="contacto">
                <h2>{literals.contacto.title}</h2>
                <p>{literals.contacto.description}</p>
                {/* Aquí puedes agregar información de contacto */}
            </section>
        </div>
        <img src="https://res.cloudinary.com/db4cls3yk/image/upload/v1678148893/adult-g682931224_1280_ygd1zy.jpg" />
    </div>
)
