// node 02-arquivos/escrevendo-arquivo morango abacate

const fs = require( 'fs' )

const frutas = process.argv.slice( 2 )

const conteudo = frutas.join( require('os').EOL ) + require('os').EOL

// substitui por padrão w+
fs.writeFile( __dirname + '/frutas.txt', conteudo, { flag: 'a+' }, err => {
    if ( err ) {
        console.error( 'erroo', err )
        return
    }
    console.log( 'sucesso!' )
} )