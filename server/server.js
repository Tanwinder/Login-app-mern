const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const db = require('./config.key');

const port = process.env.PORT || 4000;

const server = http.createServer(app);

mongoose
.connect(db.mongoDbUrl, { useNewUrlParser: true })
.then( res => console.log('mongoDb connected'))
.catch( err => console.log(err));

server.listen(port, () => console.log(`Server is running at port ${port}`));
