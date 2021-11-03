const sql = require("../config/db");

const Person = function (person) {
    this.id = person.id;
    this.nombre_completo = person.nombre_completo;
    this.correo_electronico = person.correo_electronico;
    this.empresa = person.empresa;
    this.cargo = person.cargo;
}

Person.getAll = result => {
    sql.query("SELECT * FROM person", (err, res) => {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

Person.save = (req, result) => {
    sql.query("INSERT INTO person set ?", req, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, {
            id: res.insertId,
            ...req
        });
    });
}

module.exports = Person;