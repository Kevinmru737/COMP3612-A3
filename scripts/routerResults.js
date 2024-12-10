const data = require('./raceProvider.js');

/*
*   handleAll - returns all results for the specified season
*/
const handleAll = app => {
    app.get('/f1_api/results/season/:year', (req,resp) => { 
        const found = data.filter(d => d.year === parseInt(req.params.year));
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid results for provided year"});
    
    } );
};

/*
*   handlebyId - returns results specified by the raceId
*/
const handleById = app => {
    app.get('/f1_api/results/race/:id', (req,resp) => { 
        const found = data.filter(d => d.id === parseInt(req.params.id));
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "invalid raceId"});
     } );
};

module.exports = {
    handleAll, handleById
};