const bcrypt = require('bcryptjs');

module.exports = {
    register : async (req, res) => {
        const db = req.app.get('db');
        const {email, password, confirmPW, firstName, lastName} = req.body;

        if(password !== confirmPW) {
            res.sendStatus (400);
        };

        db.CHECK_EMAIL([email.toLowerCase()]).then((users) => {
            if(users.length !== 0) {
                if(users[0].email === email.toLowerCase()) {
                    res.sendStatus(400);
                } else {
                    res.sendStatus(401);
                }
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);


                // CREATE USER HERE
                db.CREATE_USER([email.toLowerCase(), hash, firstName.toLowerCase(), lastName.toLowerCase()]).then(() => {
                    res.sendStatus(200);
                }).catch((err) => {
                    console.log(`Server error while attempting to create a new user: ${err}`);
                });
            }
        });
    }
}