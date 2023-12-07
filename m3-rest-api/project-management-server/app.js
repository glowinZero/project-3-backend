const cors = require("cors");
require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

app.use(
    cors({
      origin: ["https://thekampus.netlify.app", "http://localhost:5173"],
    })
  );

require("./config")(app);


const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const noteRoutes = require('./routes/note.routes');
app.use("/api", noteRoutes);

const taskRoutes = require('./routes/task.routes');
app.use("/api", taskRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

require("./error-handling")(app);

module.exports = app;
