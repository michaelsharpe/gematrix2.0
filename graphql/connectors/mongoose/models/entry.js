import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EntrySchema = new mongoose.Schema({
  numeralId: { type: mongoose.Schema.Types.ObjectId, ref: 'Numeral', required: true },
  word: { type: 'String', required: true },
  language: { type: 'String', required: true },
  pronunciation: { type: 'String' },
  definition: { type: 'String' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
  see: [{ type: Number }]
})

const toJSON = () => ({
  id: this.id,
  numeralId: this.numeralId,
  word: this.word,
  language: this.language,
  pronunciation: this.pronunciation,
  definition: this.definition,
  comments: this.comments,
  see: this.see
})

Object.assign(EntrySchema.methods, {
  toJSON
})

export default mongoose.model('Entry', EntrySchema)
