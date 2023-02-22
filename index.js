const {
  sum,
  reverseCase,
  objToArray,
  reverseArray,
  duplicates,
} = require("./functions");
const PORT = 3100;

const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, _, next) => {
  console.log("URL = ", req.url);
  console.log("Original_URL = ", req.originalUrl);
  console.log("METHOD = ", req.method);
  console.log("HOST = ", req.headers.host);
  console.log("IsSecure = ", req.secure);
  console.log("BODY", req.body);
  console.log("QUERY", req.query);

  next();
});

// app.all("/test", (req, res) => {
//   res.status(200).json({ message: "kkkkkkk" });
// });

app.get("/sum", (req, res) => {
  // let summary = sum(req.body.a, req.body.b);
  try {
    if (!Number.isFinite(req.body.a) || !Number.isFinite(req.body.b)) {
      throw new Error("error");
    }
    let summary = sum(req.body.a, req.body.b);
    res.status(200).json({ summary });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/reverseCase", (req, res) => {
  let reverseCaseString = reverseCase(req.body.a);
  res.status(200).json({ reverseCaseString });
});

app.put("/objToArray", (req, res) => {
  let newObjArray = objToArray(req.body.a);
  res.status(200).json({ newObjArray });
});

app.patch("/reverseArray", (req, res) => {
  let newReverseArray = reverseArray(req.body.a);
  res.status(200).json({ newReverseArray });
});

app.delete("/duplicates", (req, res) => {
  let noDuplicates = duplicates(req.body.a);
  res.status(200).json({ noDuplicates });
});

http.createServer(app).listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
