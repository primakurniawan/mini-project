import gql from "graphql-tag";

export const GET_ARTICLES_BY_ID = gql`
  subscription getArticleById($article_id: uuid!) {
    devmedia_articles_by_pk(id: $article_id) {
      title
      image
      created_at
      content
      saved
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
      comments {
        id
        comment
        user {
          id
          image
          fullname
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

export const GET_COMMENTS_BY_ARTICLE_ID = gql`
  subscription getCommentsByArticleId($article_id: uuid!) {
    devmedia_comments(where: { article_id: { _eq: $article_id } }, order_by: { created_at: desc }) {
      id
      comment
      created_at
      user {
        id
        image
        fullname
      }
    }
  }
`;

export const TOTAL_LIKES = gql`
  subscription totalLikes($article_id: uuid!) {
    devmedia_likes_aggregate(where: { article_id: { _eq: $article_id } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const CHECK_LIKES = gql`
  subscription checkLikes($user_id: uuid!, $article_id: uuid!) {
    devmedia_likes_aggregate(where: { article_id: { _eq: $article_id }, user_id: { _eq: $user_id } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  subscription GetAllArticles {
    devmedia_articles(order_by: { created_at: desc }) {
      id
      image
      title
      created_at
      content
      saved
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
