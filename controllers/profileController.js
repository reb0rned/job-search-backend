import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  const profile = await Profile.findOne({ userId: req.userId });
  res.json(profile || {});
};

export const upsertProfile = async (req, res) => {
  const { name, jobTitle, aboutMe } = req.body;
  try {
    const profile = await Profile.findOneAndUpdate(
      { userId: req.userId },
      { name, jobTitle, aboutMe },
      { upsert: true, new: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};