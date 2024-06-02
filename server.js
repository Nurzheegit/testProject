const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

const { sequelize } = require("./models");
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use("/user", userRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
