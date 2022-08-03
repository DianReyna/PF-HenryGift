// index.
const DB = require("../../pruebaJson.json");

const getAllBoxes = () => {
  return DB;
};

// const createNewWorkout = (newWorkout) => {
//   const isAlreadyAdded =
//     DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

//   if (isAlreadyAdded) {
//     return;
//   }
// };

module.exports = { getAllBoxes };
