import { gameCategories } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = gameCategories.filter((category) => {
    return category.id.toString() === id.toString();
  });

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `An Category with the id of : ${id} has not found`,
    });
  }
}
