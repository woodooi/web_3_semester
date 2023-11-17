const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use item routes with the '/api' prefix
const itemRoutes = require("./routes/item_routes");
app.use("/api", itemRoutes);  // Updated the prefix to '/api'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
