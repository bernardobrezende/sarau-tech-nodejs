const { MongoClient } = require( 'mongodb' )
const axios = require( 'axios' )

const connectionString = 'mongodb+srv://'
const client = new MongoClient( connectionString )
const eventosCollection = 'eventos'

// Pegar dados da API
const [ localidade ] = process.argv.slice( 2 )
const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${ localidade }&location.within=5km&token=`
axios.get( url ).then( response => {

    client.connect( () => {
        const db = client.db( 'sarau' )
        response.data.events.forEach( e => {
            // console.log( e.name.text )
            db.collection( eventosCollection ).insertOne( {
                nome: e.name.text,
                resumo: e.summary,
                gratuito: e.is_free,
                horarioInicio: e.start.local,
                horarioFim: e.end.local
            } )
        } )
    } )
    
} )

// client.connect( () => {
//     const db = client.db( 'sarau' )

//     db.collection( eventosCollection ).insertOne( {
//         name: 'Sarau Tecnológico TAG #01',
//         subject: 'Node.js',
//         tags: [
//             'desenvolvimento', 'node', 'web', 'tech'
//         ]
//     } )

//     db.collection( eventosCollection ).find( {
//         name: 'Sarau Tecnológico TAG #01'
//     } ).toArray( ( err, dados ) => {
//         console.log( dados )
//     } )

// } )

// client.close()