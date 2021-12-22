import { blogPosts } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = blogPosts.filter((post) => {
    return post.id.toString() === id.toString();
  });

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `A post with the id of : ${id} has not found`,
    });
  }
}
