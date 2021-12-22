import Image from "next/image";

const Post = ({ post }) => {
  return (
    <div className="blog__details__item__text text-center">
      <h4>{post.title}</h4>
      <Image
        src={`/blog/details/${post.image}`}
        width={1114}
        height={558}
        title={post.title}
        alt={post.title}
      />
      <p className="mt-3">{post.body}</p>
      <br />
      <div className="blog__details__tags">
        {post.tags.map((tag, index) => (
          <span className="text-light" key={index}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
