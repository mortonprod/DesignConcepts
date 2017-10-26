const redirect = "http://localhost:8080/webpack-dev-server/";

const config = {
    domain: 'mortonprod.eu.auth0.com',
    clientID: '8bqszeKv94qcvuJ4wHpWqmN03pajAQLH',
    redirectUri: redirect,
    audience: 'https://mortonprod.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  }

export default config;