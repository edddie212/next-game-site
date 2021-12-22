import Link from "next/link";
import Category from './Category';

const GameCategorySidebar = ({ categories }) => {
  return (
    <div className="product__sidebar">
      <div className="product__sidebar__view">
        <div className="section-title">
          <h5>Top Categories</h5>
        </div>
        {categories.map((category, index) => (
          <div key={category.id} className="filter__gallery" id="MixItUp0C59E7">
            <Category  category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCategorySidebar;
