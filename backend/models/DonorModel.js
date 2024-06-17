import mongoose, { Types } from 'mongoose';

const DonationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  donor: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: [{ type: Types.ObjectId, ref: 'Project' }],
});

const Donation = mongoose.model('Donation', DonationSchema);

export default Donation;