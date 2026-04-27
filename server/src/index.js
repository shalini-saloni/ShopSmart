require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
