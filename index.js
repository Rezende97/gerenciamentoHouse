const express    = require('express');
const bodyParser = require('body-parser');
const routes     = require('./src/routes/routes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
