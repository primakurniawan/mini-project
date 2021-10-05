import TagsItem from "./TagsItem";
import "./TagsList.scss";

const TagsList = ({ tags }) => {
  return (
    <ul className="TagsList">
      {tags.map((tag) => (
        <TagsItem key={tag.tag.id} tag={tag.tag.title} />
      ))}{" "}
    </ul>
  );
};

export default TagsList;
