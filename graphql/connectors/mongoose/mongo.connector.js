import mongoose from 'mongoose'
import config from 'config'


// Automate this importing so that I can just pass a premade object through to the connector.
// This will abstract away the modesl folder and let me 
import numeral from './models/numeral'
import comment from './models/comment'
import entry from './models/entry'

// Connector

export const mongooseConnector= () => {
  // Set default promise on mongoose to native promises
  mongoose.Promise = Promise

  // Connect to the database here.
  mongoose.connect(config.db.server, { useMongoClient: true })
    
  return {
    numeral,
    comment,
    entry
  }
} 