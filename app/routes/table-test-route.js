module.exports = app => {
    const tableTest = require("../controller/table-test-controller");

    app.get("/table-test", tableTest.findAll);
}