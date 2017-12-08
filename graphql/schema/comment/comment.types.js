export default typeDefs = `
  type Comment {
    id: ID!
    ...TimeStamp
    entry: Entry 
    numeral: Numeral
    content: String!
    see: [Numeral]
  }
`