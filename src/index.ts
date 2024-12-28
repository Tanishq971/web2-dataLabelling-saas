 import express from 'express';
 const app = express();
import userRouter from './routers/user';
import workerRouter from './routers/worker';

app.use(express.json());


app.use("/api/user" , userRouter)
app.use("/api/worker" ,workerRouter)


app.listen(4000 , ()=>{
    console.log("Server is running on port 4000")
})