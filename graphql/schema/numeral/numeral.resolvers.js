export default {
  Query: {
    numerals: (root, args, { mongoose }) => mongoose.numeral.find({}),
    numeral: (root, { id, value }, { mongoose }) => {
      if (value) {
        return mongoose.numeral.findOne({ value: value })
      }
      if (id) {
        return mongoose.numeral.findOne({_id: id})
      }
    }
  },
  Numeral: {
    entries: (root, args, { mongoose }) => mongoose.entry.find({ numeralId: root._id }).populate('comments'),
    comments: (root, args, { mongoose }) => mongoose.comment.find({ numeralId: root._id })
  }
}