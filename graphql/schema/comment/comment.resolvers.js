export default {
  Comment: {
    numeral: (root, args, {mongoose: {numeral}}) => numeral.findOne({_id: root.numeralId})
  }
}