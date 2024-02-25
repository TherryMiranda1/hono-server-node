import { css } from "hono/css";

export const globalClass = css`
  :-hono-global {
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f9f9f9;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos para las secciones */
section {
  margin-bottom: 40px;
}

h1, h2 {
  margin-bottom: 20px;
  color: #333;
}

p {
  margin-bottom: 20px;
}
img {
    width:350px;
  max-width: 100%;
  object-fit: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos específicos para cada sección */
.hero {
  text-align: center;
}

.proyectos, .articulos, .experiencia, .tecnologias, .sobre-mi, .contacto {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.tecnologias, .sobre-mi, .contacto {
  text-align: center;
}

/* Estilos específicos para móviles */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
  }
`

export const headerClass = css`
  background-color: #00a2ff;
  color: white;
  padding: 1rem;
`;

export const imageClass = css`
  width:350px;
  max-width: 100%;
  object-fit: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 12px;
`;