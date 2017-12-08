import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
  type Numeral {
    id: ID!
    value: Int
    equations: [String]
    entries: [Entry]
    comments: [Comment]
  }

  type Entry {
    id: ID!
    word: String
    numeralId: Numeral
    language: String
    pronunciation: String
    definition: String
    comments: [Comment]
    see: [Numeral]
  }

  type Comment {
      id: ID!
      content: String
      see: [Numeral]
  }

  type Query {
    numerals: [Numeral]
    numeral(id: ID, collectionId: ID, value: Int): Numeral
    searchEntries(word: String): [Entry]
  }
`
const resolvers = {
  Query: {
    numerals: (root, args, { mongoose }) => mongoose.numeral.find({}),
    numeral: (root, { id, value }, { mongoose }) => {
      if (value) {
        return mongoose.numeral.findOne({ value: value })
      }
      if (id) {
        return mongoose.numeral.findOne({_id: id})
      }
    },
    searchEntries: (root, { word }, { mongoose }) => mongoose.entry.find({word: word}).populate('comments')
  },
  Numeral: {
    entries: (root, args, { mongoose }) => mongoose.entry.find({ numeralId: root._id }).populate('comments'),
    comments: (root, args, { mongoose }) => mongoose.comment.find({ numeralId: root._id })
  }
}

// Numeral: {
//   entries: (root, args, { mongoose }) => {
//     console.log(root)
//     return mongoose.entry.find()
//       .where('entry._id')
//       .in(root.entries)
//   }
// }

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})