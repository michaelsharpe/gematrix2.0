export default typeDefs = `
  type Entry {
    id: ID!
    ...TimeStamp
    word: String!
    numeral: Numeral!
    language: Language!
    pronunciation: String!
    definition: String!
    comments: [Comment]
    see: [Numeral]
  }
`