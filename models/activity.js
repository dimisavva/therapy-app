import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activitySchema = new Schema({
  name: String,
  enum: ['Physical', 'Mental', 'Spiritual', 'Psycological'],
  owner: {type: Schema.Types.ObjectId, ref: 'Entry'}
}, {
  timestamps: true
})

const Entry = mongoose.model('Activity', entrySchema)

export{
  Activity
}
