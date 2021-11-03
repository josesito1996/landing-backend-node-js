module.exports = app => {
    const personas = require("../controller/person-controller");
    app.post("/person/save", personas.create);
    app.get("/person/listAll", personas.findAll);
};