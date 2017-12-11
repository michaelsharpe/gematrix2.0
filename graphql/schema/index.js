import path from 'path'
import { 
    fileLoader,
    mergeResolvers, 
    mergeGraphqlSchemas, 
    mergeTypes 
} from 'merge-graphql-schemas'

// Load types
const typesArray = fileLoader(path.join(__dirname, '**/*.types.graphql'))
// Load resolvers
const resolversArray = fileLoader(path.join(__dirname,'**/*.resolvers.js'))
// Possible to load models here?

export const typeDefs = mergeTypes(typesArray)
export const resolvers = mergeResolvers(resolversArray)