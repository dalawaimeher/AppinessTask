
// node server file with hapijs


const hapi = require('hapi');
const server = hapi.server({
    port: 3000,
    host: 'localhost'
});

const bootUpServer = async () => {
    await server.start();
    console.log(`Server is running at ${server.info.uri}`)

    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    })
}

bootUpServer();

exports.server = server;