import Express from "express";
const app = Express();
import cors from "cors";
app.use(cors());
import { MongoClient } from "mongodb";
let con = new MongoClient(
  "mongodb+srv://root:root@cluster0.vwjv8cn.mongodb.net/"
);

app.get("/getData", async (req, res) => {
  try {
    let monConnect = await con.connect();
    let dbConnect = await monConnect.db("Alchimetis");
    let collection = await dbConnect.collection("data");
    let data = await collection.find({}).toArray();
    res.status(200).json({
      msg: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      msg: "error",
      error: err,
    });
  }
});

app.listen(5000, () => {
  console.log("port running at 500");
});
