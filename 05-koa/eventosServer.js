const Koa = require( 'koa' )
const app = new Koa()

const {
    listarGratuitos
} = require( '../04-mongodb/listarGratuitos' )

const {
    buscarEventosPorLocalidade
} = require( '../04-mongodb/buscarEventosPorLocalidade' )

app.use( async ctx => {
    const { localidade } = ctx.request.query
    //ctx.body = await listarGratuitos()
    ctx.body = await buscarEventosPorLocalidade( localidade )
} )

app.listen( 3000 )