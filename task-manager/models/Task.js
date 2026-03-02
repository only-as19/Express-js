import mongoose from "mongoose";
const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide Name"],
    trim: true,
    maxLength: [20, "Name must be shorter than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema);
