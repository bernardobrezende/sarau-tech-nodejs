const { MongoClient } = require( 'mongodb' )
const axios = require( 'axios' )

const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient( connectionString )
const eventosCollection = 'bernardo-eventos'

module.exports = {
    buscarEventosPorLocalidade: async localidade => {
        const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${ localidade }&location.within=5km&token=I6KD6XKCCQRDBM7NZL33`
        const res = await axios.get( url )
        const { events } = res.data

        const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
        const client = await MongoClient.connect( connectionString )
        const db = client.db( 'sarau' )
        const eventosCollection = 'bernardo-eventos'
        const collection = db.collection( eventosCollection )

        var eventos = []
        events.forEach( e => {
            var evento = {
                nome: e.name.text,
                resumo: e.summary,
                gratuito: e.is_free,
                horarioInicio: e.start.local,
                horarioFim: e.end.local
            }
            eventos.push( evento )
            db.collection( eventosCollection ).insertOne( evento )
        } )

        return eventos
    }
}