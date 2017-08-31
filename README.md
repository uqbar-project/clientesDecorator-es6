
# Clientes de una Tarjeta de Crédito

[![Build Status](https://travis-ci.org/uqbar-project/clientesDecorator-es6.svg?branch=master)](https://travis-ci.org/uqbar-project/clientesDecorator-es6)

Ejercicio que muestra cómo se implementa un decorator en ECMAScript 6, en forma muy similar a otros lenguajes "basados en clases". 

<img src="img/customer.png" height="100" width="100"/>

## El dominio

Tenemos el [enunciado](https://docs.google.com/document/d/1Ijz8Pe-ci6bYwbxIn-VZDV1QcijDy2JuAUQtohNX0oA/edit) que consiste en

* un cliente que sabe comprar y pagar al vencimiento de su tarjeta
* un cliente con safe shop que evita compras por más de un monto
* un cliente con promoción que suma puntos por cada compra mayor a un monto
* se pueden combinar safe shop y promoción

La implementación se hace en el archivo [clientes](src/clientes.js), mediante una clase que representa al cliente, una clase decoradora abstracta y dos subclases decoradoras que implementan el safe shop y la promoción.

# Cómo se evalúa

## En un navegador

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/clientesDecorator-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

## Mediante un script npm

Otra opción consiste en correr los tests mediante el script de npm desde la consola o el Git Bash

```bash
$ npm install
$ npm test
```

Los archivos de configuración que pueden mirar son:

- package.json: que contiene el script para instalar dependencias y ejecutar los tests de **Karma**
- karma.conf.js: la configuración de Karma para correr los tests contra un browser oculto llamado PhantomJS, que requiere transpilar los archivos fuente en ECMAScript6 a Javascript 5.


