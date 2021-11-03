const Person = require("../model/person");

exports.findAll = (req, res) => {
    Person.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocurrio un error en la consulta"
            })
        } else {
            res.send(data);
        }
    })
}
exports.create = (req, res) => {
    if (!req.body) {
        req.status(400).send({
            message: "Contenido no debe ir vacio"
        });
    }
    Person.save(req.body, (err, data) => {
        if (err) {
            var statusCode = 500;
            switch (err.code) {
                case 'ER_BAD_FIELD_ERROR':
                    statusCode = 400;
                    break;
                default:
                    statusCode = 500;
                    break;
            }
            console.log("Error -> " + JSON.stringify(err));
            res.status(statusCode).send({
                message: err.sqlMessage
            });
        } else {
            res.send(data);
        }
    })
}