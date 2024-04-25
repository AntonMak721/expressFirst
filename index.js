import express from 'express';
import mongoose from "mongoose";
import Post from "./Post.js"
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = `mongodb+srv://anton14:mongoDB202024@clusterfirst.drrm5uj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFirst`;
const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

//
// app.get('/',(req,res)=>{
//     console.log(req.query)
//     res.status(200).json('Сервер работает хорошо')
// })




async function startApp() {
    try{
        await mongoose.connect(DB_URL, {useNewUrlParser: true,
            useUnifiedTopology: true})
        app.listen(PORT, ()=> console.log('Пашет и славно...'))
    } catch (e) {
      console.log(e)
    }
}

startApp();