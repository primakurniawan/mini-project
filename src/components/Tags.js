import "./Tags.scss";

const Tags = ({ tags }) => {
  return (
    <ul className="Tags">
      {tags?.map((tag) => (
        <li key={tag.tag.id} className="Tags__item glass">
          #{tag.tag.title}
        </li>
      ))}{" "}
    </ul>
  );
};

export default Tags;
