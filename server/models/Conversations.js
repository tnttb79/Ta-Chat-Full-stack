import mongoose from "mongoose";
const { Schema } = mongoose;

const converstationSchema = new Schema({
  members: { type: [String], require: true },
});

export default mongoose.model("Converstation", converstationSchema);
