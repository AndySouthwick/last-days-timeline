import gql from 'graphql-tag';
export const typeDefs = gql`
  type MacroLastDaysTimeline {
    adamOndhiAhmen: AdamOndhiAhmen
    newJerusalem: NewJerusalem
    mountOfOlives: MountOfOlives
    greatAndDreadfulDay: GreatAndDreadfulDay
  }
  type Travail {
    title: String
    id: ID!
    description: String,
    events: [Event]
  }
  type AdamOndhiAhmen {
    title: String
    description: String
    events: [Event]
  }
  type NewJerusalem {
    title: String
    description: String
    events: [Event]
  }
  type MountOfOlives {
    title: String
    description: String
    events: [Event]
  }
  type GreatAndDreadfulDay{
    title: String
    description: String
    events: [Event]
  }
  type Event {
    id: ID!
    eventName: String
    imageSrc: String
    sources: [Source]
    events: [Event]
  }
  type Source {
    id: ID!
    source: String
    ref: String
  }
  type Sign {
    id: ID!
    sign: String
  }
`;
