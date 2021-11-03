const TableTest = require("../model/table-test");


exports.findAll = (req, res) => {
    TableTest.getAll((err, data) => {
        if (err) {
            res.status((err, data) => {
                message: err.message || "Ocurrio un error en la consulta"
            })
        } else {
            res.send(data);
        }
    })
}