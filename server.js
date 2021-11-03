const express = require('express');
const app = express();

app.use(express.json())
app.set('port', process.env.PORT || 9000);

app.get('/', (req, res) => {
    res.json({
        message: "Hola Mundo!!!"
    })
})

require("./app/routes/person-route")(app);

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el Puerto', app.get('port'));
})