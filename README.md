# Guías

![Despliegue](https://github.com/MIID-4201-Visualizacion-Storytelling/guias/actions/workflows/despliegue.yml/badge.svg)

Este repositorio contiene los tutoriales y guías para el curso de Visualización y Storytelling de la Maestría en Inteligencia Analítica de Datos de la Universidad de los Andes.

El sitio está creado con [NuxtJS](https://nuxtjs.org/) en modo de "static site generator". El contenido escrito en Markdown se encuentra en la carpeta `/content`, y el sitio web se publica aquí mismo en Github Pages: https://miid-4201-visualizacion-storytelling.github.io/guias/

## Desarrollo local del sitio web

Se puede recrear o modificar el contenido (si se quiere usar este proyecto como plantilla para otro curso).

```bash
# Primero se debe clonar localmente el repositorio
git clone https://github.com/MIID-4201-Visualizacion-Storytelling/guias.git

# Entrar a la carpeta
cd guias

# Instalar dependencias
yarn install
```

Para iniciar un servidor local con "hot reload" al hacer cambios:

```bash
# El sitio web se puede ver en localhots:3000
yarn dev
```

## Despliegue

Este proyecto usa Github Pages para alojar el sitio web y la página se actualiza automáticamente al hacer push a la rama principal `main` usando [Github Workflows](./.github/workflows/despliegue.yml).
