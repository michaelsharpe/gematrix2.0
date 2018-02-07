import { mongooseLoader } from '@entria/graphql-mongoose-loader';
import DataLoader from 'dataloader';

export const NumeralLoader = {
  getLoader: ({numeral}) => new DataLoader(ids => 
    numeral.find({})
  )
}
