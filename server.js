const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.set('port', process.env.PORT || 9000);

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))

app.get('/', (req, res) => {
    res.json({
        message: "Hola Mundo!!!"
    })
})

require("./app/routes/person-route")(app);

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el Puerto', app.get('port'));
})