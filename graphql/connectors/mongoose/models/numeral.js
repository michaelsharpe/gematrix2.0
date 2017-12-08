import mongoose from 'mongoose'
const Schema = mongoose.Schema

const NumeralSchema = new mongoose.Schema({
  value: { type: Number, required: true, unique: true },
  math: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
  entries: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],
  createdAt: { type: Date, required: true, default: Date.now() },
  updatedAt: { type: Date, required: true, default: Date.now() }
})

const toJSON = () => ({
  id: this.id,
  value: this.value,
  math: this.math,
  comments: this.comments,
  entries: this.entries,
  createdAt: this.createdAt,
  updatedAt: this.updatedAt
})

Object.assign(NumeralSchema.methods, {
  toJSON
})

export default mongoose.model('Numeral', NumeralSchema)