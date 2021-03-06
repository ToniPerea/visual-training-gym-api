const express = require("express");
const {register, login, update_user, get_user_by_email, users_list} = require("../controller/UserController");
const {
    add_exercise,
    get_exercise_by_id,
    update_exercise,
    delete_exercise, exercises_list
} = require("../controller/ExerciseController");
const {
    add_training,
    get_training_by_email_date,
    update_training,
    delete_training,
    trainings_list,
    get_training_by_id,
    trainings_list_one_user
} = require("../controller/TrainingController");

const router = express.Router();

// User Routes
router.post("/register", register);
router.post("/login", login);
router.put("/updateUser/:email", update_user)
router.get("/getUserByEmail/:email", get_user_by_email)
router.get("/getUsersList", users_list)

// Exercise Routes
router.post("/exercise", add_exercise)
router.get("/getExercise/:id", get_exercise_by_id)
router.put("/updateExercise", update_exercise)
router.delete("/deleteExercise/:id", delete_exercise)
router.get("/getExercisesList", exercises_list)

// Training Routes
router.post("/training", add_training)
router.get("/getTraining/:email", get_training_by_email_date)
router.put("/updateTraining", update_training)
router.delete("/deleteTraining", delete_training)
router.get("/getTrainingsList", trainings_list)
router.get("/getTrainingsListOneUser/:email", trainings_list_one_user)
router.get("/getTrainingByID/:id", get_training_by_id)

module.exports = router;
