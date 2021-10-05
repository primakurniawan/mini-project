import gql from "graphql-tag";

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    devmedia_articles(order_by: { updated_at: desc }) {
      id
      image
      title
      updated_at
      content
      user {
        id
        fullname
        image
      }
      likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      saves_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      articles_tags {
        tag {
          id
          title
        }
      }
    }
  }
`;

export const GET_TAG_ID_BY_TITLE = gql`
  query getTagsId($tags: [String!]!) {
    devmedia_tags(where: { title: { _in: $tags } }) {
      id
      title
    }
  }
`;
