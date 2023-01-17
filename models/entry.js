import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema

const entrySchema = new Schema({
  name: String
  mood: String
  owner: {type: Schema.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Entry = mongoose.model{'Entry', entrySchema}

export{
  Entry
}
