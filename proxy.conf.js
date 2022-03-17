const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'https://estante--virtual.herokuapp.com/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;