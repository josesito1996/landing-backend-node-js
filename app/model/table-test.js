const sql = require("../config/db");

const TableTest = function (tableTest) {
    this.id = tableTest.id;
    this.nombre = tableTest.nombre;
    this.apellidos = tableTest.apellidos;
}

TableTest.getAll = result => {
    sql.query("SELECT * FROM table_test", (err, res) => {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
            return;
        }
        console.log("TableTest : ", res);
        result(null, res);
    });
}
module.exports = TableTest;