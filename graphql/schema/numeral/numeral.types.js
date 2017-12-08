export default typeDefs = `
  type Numeral {
    id: ID!
    ...TimeStamp
    value: Int!
    equations: [String!]
    collection: Collection! 
    entries: [Entry]
    comments: [Comment]
  }
`