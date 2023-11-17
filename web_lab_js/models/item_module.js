const Sequelize = require("sequelize");
const db = require("./db.js");

const Plane = db.define("planes", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(30), // VARCHAR(30)
    allowNull: false,
  },
  tank_volume: {
    type: Sequelize.INTEGER.UNSIGNED, // INT UNSIGNED
    allowNull: false,
  },
  num_of_seats: {
    type: Sequelize.INTEGER.UNSIGNED, // INT UNSIGNED
    allowNull: false,
  },
});

Plane.sync().then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = Plane;
