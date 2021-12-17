import gql from "graphql-tag";
import { apolloClient } from "./../client.js";
const QueryMacroTimeLine = gql`
  query MacroLastDaysTimeline @client {
    MacroLastDaysTimeline {
      adamOndhiAhmen {
        title
      }
    }
  }
`;

export const MacroLastDaysTimeline = async () => {
  console.log("macro query ran");
  const results = await apolloClient.query({
    query: QueryMacroTimeLine,
  });
  console.log("results", results);
};

const QueryTravail = gql`
  query Travail @client {
    Travail {
      description
      events {
        eventName
        sources {
          source
          ref
        }
      }
      title
    }
  }
`;

export const Travail = async () => {
  console.log("Travail ran");
  const results = await apolloClient.query({
    query: QueryTravail,
  });
  console.log("Travail results", results);
};
