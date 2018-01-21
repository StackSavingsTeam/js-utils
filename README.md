<p align="center">
  <img src="https://lh3.googleusercontent.com/-kuZK_9RjH3Q/WluTIhi6yWI/AAAAAAAAAa4/3-lNezXWLEM6E2GZjJ7VC2Bn1YJ-tIYewCJoC/w530-h117-n/stacksavings.png" alt="" width=370 height=80>
  </br>
  <a href="https://site.stacksavings.com/"><strong>Visit our homepage »</strong></a>
</p>

# Stacksavings - Utils

Hemos creado un paquete <b>"@stacksavings/utils"</b> para dar métodos que faciliten la programación dentro de jsTrader como logs, conversiones de fecha etc.

## Table of contents

- [Installing](#Installing)
- [Usage](#Installing)
- [Methods](#Installing)

## Getting Started

### Installing
Para poder instalar el cliente solo basta con ejecutar el comando:
```
npm i @stacksavings/utils
```
### Usage
Para empezar a usarlo solo debe de incluirlo en tu código asi:
```
const dynamoDB = require('@stacksavings/utils')
```
### Methods

* <b>log:</b>

<p>&nbsp;&nbsp;&nbsp;&nbsp;Create a folder named "logs" with logs file.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Example to call it:</b>

```
const logger = require('@stacksavings/utils').log()

logger.info('This is a informative log')
logger.error('This is a error log')
```
&nbsp;&nbsp;&nbsp;&nbsp;<b>Output:</b>
```
{"level":"info","message":"This is a informative log","timestamp":"19:38:48"}
{"level":"error","message":"This is a error log","timestamp":"19:38:48"}
```
* <b>toTimeStampUnix:</b>

<p>&nbsp;&nbsp;&nbsp;&nbsp;Convert a date in format "YYYYMMDD" to Unix Timestamp format.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Example to call it:</b>

```
const logger = require('@stacksavings/utils').log()
const TimeStamp = require('@stacksavings/utils')

logger.info(TimeStamp.toTimeStampUnix(20180115))
```
&nbsp;&nbsp;&nbsp;&nbsp;<b>Output:</b>
```
1515990600
```

### Test

```bash
 $ npm run test
```
 
### Creators

<b>Stacksavings</b>
* <a href="https://site.stacksavings.com">https://site.stacksavings.com</a>

</br>

<b>David Molina</b>
* <a href="https://dmolina101.github.io">https://dmolina101.github.io</a>
