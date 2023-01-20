import mongoose from 'mongoose'

const Schema = mongoose.Schema

const entrySchema = new Schema({
  name: String,
  mood: [String],
  help: Boolean,
  date: Number,
  activities: {type: Schema.Types.ObjectId, ref: 'Activity'}
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export{
  Entry
}
