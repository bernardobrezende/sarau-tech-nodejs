// para executar: node 02-arquivos/lendo-arquivo

// 1. LENDO EM MEMORIA
// const fs = require( 'fs' )

// fs.readFile( './frutas.txt', ( err, data ) => {
//     if ( err ) {
//       console.error( `opa erro!`, err )
//       return
//     }
//     console.log( data.toString().split( require('os').EOL ) )
// } )

// 2. USANDO STREAMS
const lineReader = require( 'readline' ).createInterface( {
    input: require( 'fs' ).createReadStream( __dirname + '/frutas.txt' )
} )
  
lineReader.on('line', line => {
    console.log( line )
} )
  