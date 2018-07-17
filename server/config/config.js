const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGOLAB_URI
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://localhost:27017/booksShelf'
  }
}

exports.get = function get(env){
  return config[env] || config.default
}

module.exports = {  
  SECRET: process.env.SECRET || "SUPERSECRETPASSWORD123",
  DATABASE: process.env.DB || "mongodb://localhost:27017/booksShelf"
}