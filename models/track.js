const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date
        // required: true
    },
    score: {
      anger: Number,
      joy: Number,
      fear: Number,
      sadness: Number,
      surprise: Number
    },
    account: {
        type: Schema.ObjectId, ref: "Account"
    }
});

trackSchema.pre('save', function (next) {
    let track = this;
    let newDate = new Date();
    if (!track.date) {
        track.date = newDate;
    }
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
