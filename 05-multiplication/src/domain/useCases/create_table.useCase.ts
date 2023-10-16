
export interface CreateTableUseCase {
  execute: ( options: CreateTableOptions ) => string,
}

export interface CreateTableOptions {
  base: number,
  limit?: number,
}

export class CreateTable implements CreateTableUseCase {
  
  constructor(
    /**
     * DI: dependency injection 
    */
  ){}

  // también se suele poner 'run' en vez de execute
  execute({ base, limit = 10 }: CreateTableOptions ){
    let outputMessage = ''
    for ( let i = 1; i <= limit; i++ ) {
      outputMessage += `${base} x ${i} = ${base * i}\n` // lo último, ' \n ', es un salto de linea
    }

    return outputMessage
  }

}