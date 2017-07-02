const configs = {
  production: {
    host: 'signhere.herokuapp.com',
    protocol: 'https'
  },
  development: {
    hostname: 'localhost',
    protocol: 'http',
    port: 3000
  }
}

console.log('NODE_ENV', process.env.NODE_ENV)

module.exports = configs[process.env.NODE_ENV || 'development']
