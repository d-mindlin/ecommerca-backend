const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// sync sequelize models to database and turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
});