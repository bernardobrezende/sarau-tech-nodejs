const ingredientes = process.argv.slice( 2 )

console.log( process.env.DEBUG )

const DEBUG = process.env.DEBUG
const USUARIO = process.env.USUARIO

const {
    DEBUG,
    USUARIO
} = process.env

console.log( 'Usuario é: ', USUARIO )

if ( DEBUG === 'true' ) {
    console.log( 'estamos em modo de desenvolvimento' )
}

// for ( var ingrediente of ingredientes ) {
//     console.log( ingrediente.toUpperCase() )
// }

// for ( var i = 0; i < ingredientes.length; i++ ) {
//     const ingrediente = ingredientes[ i ]
//     console.log( ingrediente.toUpperCase() )
// }

// const imprimirIngrediente = i => {
//     console.log( i.toUpperCase() )
// }

// ingredientes.forEach( imprimirIngrediente )

ingredientes.forEach( i => console.log( i.toUpperCase() ) )

console.log( ingredientes )
console.log( 'Hello World' )