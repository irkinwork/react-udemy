const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: 'test:pass123@ds019498.ds139841.mlab.com:39841/booksshelf'
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://localhost:27017/booksShelf'

  }
}

exports.get = function get(env){
  return config[env] || config.default
}