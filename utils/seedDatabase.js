const { Campus } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imgUrl: "",
      description: "A college in Brooklyn"
    }),
  ]);
};

module.exports = seedDatabase;
