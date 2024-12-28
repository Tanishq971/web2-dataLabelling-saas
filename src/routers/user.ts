import { Router } from "express";
import express from "express";
const userRouter = express.Router();
import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const JWT_SECRET = "123"
const prisma = new PrismaClient();
userRouter.post('/signin' ,async (req,res)=>{
   try{   //Todo:add signin verification

    const hardcodedWalletAddress = "HCx5PCe8o5oxZ831A4Yj8V2pqKM8tR2skmAqptvrPHFw"
    //find if exist or create if not exist this is imp 
    const user = await prisma.user.upsert({
        where:{
            address:hardcodedWalletAddress,
        },
        update:{
            address:hardcodedWalletAddress
        },
        create:{
            address: hardcodedWalletAddress
        }
    });

    const token = jwt.sign({
       userId:user.id
    } , JWT_SECRET)
    
    res.status(200).json({
       token: token
    })
   }catch(err){
    console.log(err);
    res.status(500).json({
       message: "Internal server error"
    })
   }
})
















export default userRouter 