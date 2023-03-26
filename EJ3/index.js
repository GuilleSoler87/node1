const numeros = require('./numeros');
const logplease = require('logplease');
const logger = logplease.create('utils');

const valores = [2, 3, 101, 201, 202, 100];

for (let i = 0; i < valores.length; i++) {
  const valor = valores[i];
  if (numeros.esPar(valor)) {
    logger.info(`El número ${valor} es par`);
  } else {
    logger.error(`El número ${valor} no es par`);
  }
}
