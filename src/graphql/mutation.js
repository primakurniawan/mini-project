import gql from "graphql-tag";

export const ADD_LIKES = gql`
  mutation addLikes($object: devmedia_likes_insert_input!) {
    insert_devmedia_likes_one(object: $object) {
      id
    }
  }
`;

export const ADD_SAVES = gql`
  mutation addSaves($object: devmedia_saves_insert_input!) {
    insert_devmedia_saves_one(object: $object) {
      id
    }
  }
`;

export const DELETE_LIKES = gql`
  mutation deleteLikes($article_id: uuid!, $user_id: uuid!) {
    delete_devmedia_likes(where: { article_id: { _eq: $article_id }, user_id: { _eq: $user_id } }) {
      affected_rows
    }
  }
`;

export const DELETE_SAVES = gql`
  mutation deleteSaves($article_id: uuid!, $user_id: uuid!) {
    delete_devmedia_saves(where: { article_id: { _eq: $article_id }, user_id: { _eq: $user_id } }) {
      affected_rows
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($object: devmedia_comments_insert_input!) {
    insert_devmedia_comments_one(object: $object) {
      id
    }
  }
`;

export const ADD_ARTICLE_AND_TAGS = gql`
  mutation insertArticleAndTags($newArticle: devmedia_articles_insert_input!, $newTags: [devmedia_tags_insert_input!]!) {
    insert_devmedia_articles_one(object: $newArticle) {
      id
    }
    insert_devmedia_tags(objects: $newTags, on_conflict: { constraint: tags_title_key }) {
      affected_rows
    }
  }
`;

export const ADD_ARTICLES_TAGS = gql`
  mutation insertArticleTags($objects: [devmedia_articles_tags_insert_input!] = {}) {
    insert_devmedia_articles_tags(objects: $objects) {
      affected_rows
    }
  }
`;

export const SIGN_UP = gql`
  mutation MyMutation5($object: devmedia_user_insert_input = {}) {
    insert_devmedia_user_one(object: $object, on_conflict: { constraint: user_email_key }) {
      id
    }
  }
`;

export const SIGN_IN = gql`
  query MyQuery($email: String!, $password: String!) {
    devmedia_user(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
    }
  }
`;
