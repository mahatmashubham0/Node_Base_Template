const express = require('express');
const {serverConfig , Logger} = require('./config')
const apiRoutes = require('./routes');

const App = express();

App.use('/api', apiRoutes);

App.listen(serverConfig.Port , ()=> {
    console.log(`Successfully started server on Port ${serverConfig.Port}`);
})