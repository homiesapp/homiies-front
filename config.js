var isProduction = process.env.NODE_ENV === 'production';
var host = isProduction ? 'https://boiling-beyond-5952.herokuapp.com' : 'http://localhost:3000';

module.exports = {
  host: host
}