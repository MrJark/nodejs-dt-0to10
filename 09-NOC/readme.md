# Readme para este archivo

He quitado del package.json **general** la dependencia de _nodemon_ porque voy a trabajar aquí con ts-node. [Configuración](https://gist.github.com/Klerith/3ba17e86dc4fabd8301a59699b9ffc0b)
```json
  "nodemon": "3.0.1",
```

## Para dev

1. Clonar el archivo .env.template y pasarlo a .env
2. Configurar las variables de entorno:
  ```.env
    PORT=

    MAILER_EMAIL=
    MAILER_SECRET_KEY=

    PROD=false
  ```
3. Crear los módulos de node con `npm i`
4. Ejecutar `npm run dev`