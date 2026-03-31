require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// MONGODB CONNECTION
mongoose.connect(mongodb://sai:sai@ac-wyefnns-shard-00-00.cp256s7.mongodb.net:27017,ac-wyefnns-shard-00-01.cp256s7.mongodb.net:27017,ac-wyefnns-shard-00-02.cp256s7.mongodb.net:27017/?ssl=true&replicaSet=atlas-yki2yi-shard-0&authSource=admin&appName=cluster5)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log(err));

// PORT
const PORT = process.env.PORT || 8244;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});