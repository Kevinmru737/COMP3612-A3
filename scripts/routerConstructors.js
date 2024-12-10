const {data, results} = require('./constructorProvider.js');

/*
*   handleAll - returns all constructors
*/
const handleAll = app => {
    app.get('/f1_api/constructors', (req,resp) => { resp.json(data) } );
};

/*
*   handlebyId - returns constructor specified by reference
*/
const handleById = app => {
    app.get('/f1_api/constructors/:ref', (req,resp) => { 
        const found = data.filter(d => d.constructorRef === (req.params.ref).toLowerCase());
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid constructor for provided constructorRef"});
     } );
};

/*
*   getResults - returns results for a specified constructor
*/
const getResults = app => {
    app.get('/f1_api/constructorResults/:ref/:year', (req, resp) => {
        const found = results.filter(d => {
            return ((d.constructor.ref === (req.params.ref).toLowerCase()) && 
            (parseInt(d.race.year) === parseInt(req.params.year)))
        });
        if(found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid results for provided constructorRef/year"});
        
    })
}

module.exports = {
    handleAll, handleById, getResults
};
