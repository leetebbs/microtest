const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const mongoConnectURL = process.env.MONGO_CONNECT_URL;
const User = require("./models/user");

app.get("/", (req, res) => {
  res.send("Microgen server is up and running");
});


//endpoint to create a new user
app.post("/api/newUser", async (req, res) => {
    console.log(req.body)
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
})

//endpoint to get all users
app.get("/api/users",async  (req, res) => {
    try {
    const result = await User.find();
  res.json({
    "Users ": result
  });
} catch (error) {
  console.log(error.message);
  res.status(500).json({ message: error.message });
}
})

//endpoint to get the generated power for a given token id
app.get("/api/users/generated/:tokenId", async (req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ tokenId: tokenId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user.powerGenerated);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
  }
)

//endpoint to get the consumed power for a given token id
app.get("/api/users/consumed/:tokenId", async (req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ tokenId: tokenId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user.powerConsumed);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
  }
)

//endpoint to update a user data
// {
//     "powerGenerated": 8000,
//     "powerConsumed": 12300
// }
app.patch("/api/users/update/:tokenId", async (req, res) => {
  try {
    const tokenId = req.params.tokenId;
    const user = await User.findOneAndUpdate({ tokenId: tokenId }, req.body, {new: true});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({user});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
})


const start = async () => {
  try {
    await mongoose.connect(mongoConnectURL);
    app.listen(5000, () => {
      console.log("Server started on port " + PORT);
    });
  } catch (error) {
    console.log(error.message);
  }
}

start();