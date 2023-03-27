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

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "./posters")));

const upload = multer({ dest: "posters/" });

app.get(/^(?!\/).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.get("/api/movieReviews", async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const db = client.db("movies");
  const movieData = await db.collection("movies").find({}).toArray();
  //console.log(movieData);
  res.json(movieData);
});

app.post("/api/AddMovieReview", upload.single("image"), async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("movies");
  const movieData = await db.collection("movies").insertOne({
    name: req.body.name,
    releaseDate: req.body.releaseDate,
    actors: req.body.actors,
    image: req.file.filename,
    rating: req.body.rating,
  });
  //console.log(movieData);
  res.redirect("/");
});

app.post("/api/deleteReview", async (req, res) => {
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