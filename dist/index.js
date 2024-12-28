"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_1 = __importDefault(require("./routers/user"));
const worker_1 = __importDefault(require("./routers/worker"));
app.use(express_1.default.json());
app.use("/api/user", user_1.default);
app.use("/api/worker", worker_1.default);
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
