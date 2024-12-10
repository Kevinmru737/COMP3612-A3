const data = require('./circuitProvider.js');

/*
*   handleAll - returns all circuits
*/
const handleAll = app => {
    app.get('/f1_api/circuits', (req,resp) => { resp.json(data) } );
};

/*
*   handlebyId - returns circuit specified by reference id
*/
const handleById = app => {
    app.get('/f1_api/circuits/:id', (req,resp) => { 
        const found = data.filter(d => d.circuitId === parseInt(req.params.id));
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid circuit for provided circuitRef"});
     } );
};

module.exports = {
    handleAll, handleById
};