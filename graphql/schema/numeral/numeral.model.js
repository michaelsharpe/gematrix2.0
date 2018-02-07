export const getNumerals = (root, args, { mongoose: { numeral } }) => numeral.find({})

export const getNumeral = (root, { id, value }, { mongoose: { numeral }}) => {
  if (value) {
    return numeral.findOne({ value: value })
  }
  if (id) {
    return numeral.findOne({_id: id})
  }
}