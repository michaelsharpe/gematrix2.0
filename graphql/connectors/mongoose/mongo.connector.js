import mongoose from 'mongoose'
import config from 'config'

import numeral from './models/numeral'
import comment from './models/comment'
import entry from './models/entry'

// Connector

export const mongooseConnector= () => {
  mongoose.Promise = Promise
  mongoose.connect(config.db.server, { useMongoClient: true })
    
  return {
    numeral,
    comment,
    entry
  }
} 