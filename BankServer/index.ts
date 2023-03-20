import 'dotenv/config'
import express from "express"
import DBconnect from "./config/mongDB"
import homeRoutes from "./routes/homeRoutes"
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
DBconnect();
server.use("/", homeRoutes);
server.listen(process.env.port, () => {
    console.log("server at port " + process.env.port)
})   