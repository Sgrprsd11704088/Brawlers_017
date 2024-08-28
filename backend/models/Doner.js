// import  mongoose from 'mongoose';

// const DonationSchema = new mongoose.Schema({
//   donor: {
//     type: String,
//     ref: 'User',
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   message: {
//     type: String,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Donation = mongoose.model('Donation', DonationSchema);
// export default Donation;

import mongoose from 'mongoose';

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
  date: {
    type: Date,
    default: Date.now
  }
});

const Donation = mongoose.model('Donation', DonationSchema);

export default Donation;

