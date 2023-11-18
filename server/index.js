const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const hrcreationrouter = require("./controllers/hrcreation");
const router = require("./controllers/auth");
const hrrouter = require("./controllers/hr");
const resdevrouter = require("./controllers/responsabledev");
const devrouter = require("./controllers/developer");
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const { chatRouter, io } = require('./controllers/chat');
const financerouter = require("./controllers/financier");
require("dotenv").config();
const server = http.createServer(app);
const SECRET_KEY = 'your-secret-key';

const httpServer = require('http').createServer(app);

MONGO_URL =
 "mongodb+srv://Kodikos:M.hachoud@cluster0.1vyli.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));
const port = 5000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(express.json());
app.use('/hrcreation',hrcreationrouter)
app.use('/',router)
app.use('/hr',hrrouter)
app.use("/resdev",resdevrouter)
app.use("/dev",devrouter)
app.use('/chat',chatRouter)
app.use('/finance',financerouter)
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});