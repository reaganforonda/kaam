
module.exports = {
    
    addProperty : (req, res)=> {
        const db = req.app.get('db');
        const {propertyName, acctSysCode} = req.body;

        db.ADD_PROPERTY([propertyName, acctSysCode]).then(()=> {
            res.sendStatus(200);
        }).catch((err)=> {
            console.log(`Server error while attempting ot add property: ${err}`);
            res.sendStatus(400);
        })

    },

    getProperty : (req, res)=> {
        const db = req.app.get('db');
        const {propertyID} = req.body;

        db.GET_PROPERTIES([propertyID]).then((properties)=> {
            res.send(properties).status(200);
        }).catch((err) => {
            console.log(`Server error while attempting to get properties: ${err}`);
            res.sendStatus(400);
        })
    }
}