const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
//configure cors
// app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT ,POST,DELETE");
    next();
  });

// configure dotEnv
dotEnv.config({path : './config/config.env'});

// configure express to accept form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const hostname = process.env.LOCAL_HOST_NAME;
const port = process.env.LOCAL_PORT;

// homepage Request
app.get('/' , (request , response) => {
   response.send('Welcome To Prayer App express server');
});

// connect to mongo
mongoose.connect(process.env.MONGO_LOCAL_DB_URL , {
    useCreateIndex : true,
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((response) => {
    console.log('Connected to Database Successfully.........');
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

//configure a router
app.use('/users' , require('./router/userRouter'));
// app.use('/events' , require('./router/eventRouter'));

//listen to Port
app.listen(port , hostname , () => {
   console.log(`Express Server is Started at http://${hostname}:${port}`);
});