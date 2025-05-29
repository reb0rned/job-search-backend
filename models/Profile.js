import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  jobTitle: String,
  aboutMe: String
});

export default mongoose.model("Profile", profileSchema);