const data = require('./raceProvider.js');

/*
*   handleAll - returns all races
*/
const handleAll = app => {
    app.get('/f1_api/races/season/:year', (req,resp) => { 
        const found = data.filter(d => d.year === parseInt(req.params.year));
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid race for provided year"});
    
    } );
};

/*
*   handlebyId - returns race specified by reference
*/
const handleById = app => {
    app.get('/f1_api/races/:id', (req,resp) => { 
        const found = data.filter(d => d.id === parseInt(req.params.id));
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid race for provided raceId"});
     } );
};

module.exports = {
    handleAll, handleById
};