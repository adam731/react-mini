import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient, ObjectId } from "mongodb";
import multer from "multer";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName);

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "./posters")));

const upload = multer({dest:"posters/"});

app.get("/movieReviews", async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("movies");
  const movieData = await db.collection("movies").find({}).toArray();
  //console.log(movieData);
  res.json(movieData);
});

app.post("/AddMovieReview", upload.single("image"), async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  console.log(req.body.image.filename);


  const db = client.db("movies");
  const movieData = await db.collection("movies").insertOne({
    "id":req.body.title, 
    "name":req.body.name, 
    "releaseDate":req.body.releaseDate, 
    "actors":req.body.actors, 
    "image":req.body.image, 
    "rating":req.body.rating});
  //console.log(movieData);
});

app.post("/deleteReview", async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("movies");

  const deleteOperation = await db
    .collection("movies")
    .deleteOne({ _id: new ObjectId(req.body._id) });

  console.log(deleteOperation);
  res.redirect("/");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});