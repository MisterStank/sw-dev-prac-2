import mongoose from "mongoose"
const HospitalSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please add hospital name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
      },
      address: {
        type: String,
        required: [true, "Please add address"],
      },
      district: {
        type: String,
        required: [true, "Please add district"],
      },
      province: {
        type: String,
        required: [true, "Please add province"],
      },
      tel: {
        type: String,
        required: [true, "Please add tel"],
      },
      picture: {
        type: String,
        required: [true, "Please add picture"],
      },
    }
  );

  const Hospital = mongoose.models.Hospital || mongoose.model("Hospital", HospitalSchema)
  export default Hospital