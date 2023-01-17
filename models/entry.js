import mongoose from 'mongoose'

const Schema = mongoose.Schema

const entrySchema = new Schema({
  name: String,
  mood: [String],
  date: Number,
  activity: [String],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export{
  Entry
}
