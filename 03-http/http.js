const [ localidade ] = process.argv.slice( 2 )
// const localidade = process.argv.slice( 2 )[ 0 ]

// const [ localidade, uf ] = process.argv.slice( 2 )
// const localidade = process.argv.slice( 2 )[ 0 ]
// const uf = process.argv.slice( 2 )[ 1 ]

console.log( `Aguarde...` )
// const axios = require( 'axios' )
// axios.get( url ).then( response => {
    //     response.data.events.forEach( e => {
        //         console.log( e.name.text )
        //     } )
        // } )

const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${ localidade }&location.within=5km&token=I6KD6XKCCQRDBM7NZL33`

const https = require( 'https' )

const req = https.request(
    url, res => {
        console.log( res.statusCode )
        var json = ''
        res.on( 'data', dados => {
            json += dados
        } )

        res.on( 'end', () => {
            var response = JSON.parse( json )
            response.events.forEach( e => {
                console.log( e.name.text )
            } )
        } )
    }
)

req.end()