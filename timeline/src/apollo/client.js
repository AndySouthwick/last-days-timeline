import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import {resolvers} from './resolvers/resolvers'
import data from "./../../../json/macroLastDaysTimeline.json"
import travail from "./../../../json/travail.json"
import {typeDefs} from "./typeDefs/typeDefs"
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    cache,
    typeDefs,
    // resolvers
  });

  cache.writeData({
    data: {
      macroLastDaysTimeline: {
        ...data,
      Travail: travail
      },
      Travail: travail
    }
  });