import 'dotenv/config' // para importar las variables de entorno
import * as env from 'env-var' // para las validaciones

export const envs = {
  PORT: env.get( 'PORT' ).required().asPortNumber(),
  MAILER_EMAIL: env.get( 'MAILER_EMAIL' ).required().asEmailString(),
  MAILER_SECRET_KEY: env.get( 'MAILER_SECRET_KEY' ).required().asString(),
  PROD: env.get( 'PROD' ).required().asBool()
}