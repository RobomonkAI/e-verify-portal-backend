const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    org: { type: String, required: true },
    orgPic: {
      type: String,
      default:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/Picture11.png?raw=true", // Optional, default if no image is uploaded
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Vendor", vendorSchema);
