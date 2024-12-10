const {data, results} = require('./driverProvider.js');

/*
*   handleAll - returns all drivers
*/
const handleAll = app => {
    app.get('/f1_api/drivers', (req,resp) => { resp.json(data) } );
};

/*
*   handlebyId - returns driver specified by reference
*/
const handleById = app => {
    app.get('/f1_api/drivers/:ref', (req,resp) => { 
        const found = data.filter(d => d.driverRef === req.params.ref);
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid driver for provided driverRef"});
     } );
};

/*
*   getResults - returns results for a specified driver
*/
const getResults = app => {
    app.get('/f1_api/driverResults/:ref/:year', (req,resp) => {
        const found = results.filter(d => {
            return ((d.driver.ref === req.params.ref) && 
            (d.race.year === parseInt(req.params.year)))
        });
        if(found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid driver for provided driverRef/year"});
        
    })
}

module.exports = {
    handleAll, handleById, getResults
};
