# FzSports
## System Requirements



- Node.js 16.13.2 lts

## Installation

The app requires [Node.js](https://nodejs.org/) v16 to run.


Before get into the app we have to upload the data from aws to our mongo database, just follow the next steps.

```sh
cd pruebafz/utilities
node uploadData.js
```
The database is connected to an own url server and has a collection called plantelequipo, it's no needed to create a new one.

wait until a message is printed in console saying: upload finished

Now we can continue with the project

Install the dependencies and devDependencies and start the server.

```sh
cd pruebafz
npm i
node app
```

## Tests

There are two ways to test the api, you can use the collection script inside utilities folder and then you can import it to postman, the other way is using the test dependencies following the next step.

```sh
npm run test
```
