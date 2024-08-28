import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  username: {type: String,required: true,},
  email: {type: String,required: true,unique: true, },
  password: {type: String,required: true,},
  role: {type: String,enum: ['student', 'donor'], },
});

UserSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
      // what are the things are requird to hast the password
      //1- slat
      // password
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next()
  });
  
  // this is the function for the matching the password
  UserSchema.method.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
const userModel = mongoose.model('User', UserSchema);

export default userModel;
