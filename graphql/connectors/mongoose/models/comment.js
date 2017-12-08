import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new mongoose.Schema({
  type: { type: String },
  entryId: { type: mongoose.Schema.ObjectId, refs: "Entry"},
  numeralId: { type: mongoose.Schema.ObjectId, refs: "Numeral"},
  content: { type: String, required: true },
  see: [{ type: Number }],
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() }
})

const toJSON = () => ({
  id: this.id,
  type: this.type,
  content: this.content,
  see: this.see,
  createdAt: this.createdAt,
  updatedAt: this.updatedAt
})

Object.assign(CommentSchema.methods, {
  toJSON
})

export default mongoose.model('Comment', CommentSchema)