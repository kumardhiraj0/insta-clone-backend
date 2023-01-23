const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const mongoose =require('mongoose')
const postRoutes = require('./routes/postRoutes.js')
mongoose.set('strictQuery', true);


const app =express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/api/v1/posts",postRoutes )


//const CONNECTION_URL = 'mongodb://0.0.0.0:27017/instaclone';
const CONNECTION_URL = 'mongodb+srv://Dhiraj:Dhiraj@cluster0.pu2jbtg.mongodb.net/test?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8081;

app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));