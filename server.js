const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./src/config/dbconfig");
const errorHandler = require("./src/middleware/ErrorHandler");
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };

/** Connect to MongoDB */
mongoose.connect(dbConfig.mongo.url, {retryWrites:true, w:'majority'})
    .then( ()=> {
            console.log("MongoDB Connected");
        })
        .catch((error)=> {
            console.log(error);  
})
app.use(express.json());
app.use(logger);

app.use("/api/categories", require("./src/routes/categoryRoutes")); //middleware
app.use("/api/authors", require("./src/routes/authorRoutes")); //middleware
app.use("/api/users", require("./src/routes/userRoutes"));
app.use("/api/posts", require("./src/routes/postRoutes")); //middleware
app.use("/api/comments", require("./src/routes/commentRoutes")); 
app.use(errorHandler);

app.listen(dbConfig.server.port, () => {
    console.log(`Example app listening on port ${dbConfig.server.port}`)
  });