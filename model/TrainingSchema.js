const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
    name: {type: String, required: true},
    weight: {type: String, required: true},
    series: {type: Number, required: true},
    repetitions: {type: Number, required: true},
    gif: {type: String, required: true},
});

module.exports = mongoose.model("trainings", trainingSchema);