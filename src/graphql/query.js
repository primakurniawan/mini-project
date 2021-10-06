import gql from "graphql-tag";

export const GET_TAG_ID_BY_TITLE = gql`
  query getTagsId($tags: [String!]!) {
    devmedia_tags(where: { title: { _in: $tags } }) {
      id
      title
    }
  }
`;
