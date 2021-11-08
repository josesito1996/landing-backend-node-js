module.exports = app => {
    const personas = require("../controller/person-controller");
    app.post("/contactUs/save", personas.create);
    app.get("/contactUs/listAll", personas.findAll);
};