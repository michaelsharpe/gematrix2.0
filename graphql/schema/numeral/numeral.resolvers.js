import {
  getNumeral,
  getNumerals
} from './numeral.model'

export default {
  Query: {
    numerals: getNumerals,
    numeral: getNumeral
  },
  Numeral: {
    entries: (root, args, { mongoose }) => mongoose.entry.find({ numeralId: root._id }).populate('comments'),
    comments: (root, args, { mongoose }) => mongoose.comment.find({ numeralId: root._id })
  }
}