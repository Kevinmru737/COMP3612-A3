const fs = require("fs");
const express = require('express');
const app = express();
const path = require('path');
const driverRouter = require('./scripts/routerDrivers.js');
const circuitRouter = require('./scripts/routerCircuits.js');
const constructorRouter = require('./scripts/routerConstructors.js');
const raceRouter = require('./scripts/routerRaces.js');
const resultRouter = require('./scripts/routerResults.js');
const port = 8080;


driverRouter.handleAll(app);
driverRouter.handleById(app);
driverRouter.getResults(app);

circuitRouter.handleAll(app);
circuitRouter.handleById(app);

constructorRouter.handleAll(app);
constructorRouter.handleById(app);
constructorRouter.getResults(app);


raceRouter.handleAll(app);
raceRouter.handleById(app);

resultRouter.handleAll(app);
resultRouter.handleById(app);

app.listen(port, () => {
    console.log("Server running at port= " + port);
});