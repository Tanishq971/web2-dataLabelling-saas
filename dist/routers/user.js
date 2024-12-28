"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "123";
const prisma = new client_1.PrismaClient();
userRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { //Todo:add signin verification
        const hardcodedWalletAddress = "HCx5PCe8o5oxZ831A4Yj8V2pqKM8tR2skmAqptvrPHFw";
        //find if exist or create if not exist this is imp 
        const user = yield prisma.user.upsert({
            where: {
                address: hardcodedWalletAddress,
            },
            update: {
                address: hardcodedWalletAddress
            },
            create: {
                address: hardcodedWalletAddress
            }
        });
        const token = jsonwebtoken_1.default.sign({
            userId: user.id
        }, JWT_SECRET);
        res.status(200).json({
            token: token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}));
exports.default = userRouter;
