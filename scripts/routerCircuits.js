const data = require('./circuitProvider.js');

/*
*   handleAll - returns all circuits
*/
const handleAll = app => {
    app.get('/f1_api/circuits', (req,resp) => { resp.json(data) } );
};

/*
*   handlebyId - returns circuit specified by reference
*/
const handleById = app => {
    app.get('/f1_api/circuits/:ref', (req,resp) => { 
        const found = data.filter(d => d.circuitRef === (req.params.ref).toLowerCase());
        if (found.length > 0)
            resp.json(found);
        else
            resp.json({"message": "no valid circuit for provided circuitRef"});
     } );
};

module.exports = {
    handleAll, handleById
};