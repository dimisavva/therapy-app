import mongoose from 'mongoose'

const Schema = mongoose.Schema

const entrySchema = new Schema({
  name: String,
  mood: Array,
  help: Boolean,
  date: Number,
  activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Entry = mongoose.model('Entry', entrySchema)

export{
  Entry
}
