export default {
  Query: {
    searchEntries: (root, { word }, { mongoose }) => mongoose.entry.find({word: word}).populate('comments')
  }
}