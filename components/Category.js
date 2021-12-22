import Link from "next/link";

const Category = ({category})=> {
    return (
        <div
        className=" product__sidebar__view__item set-bg mix day years"
        style={{
          backgroundImage: `url(${category.image})`,
        }}
      >
        <div className="ep">
          { category.title.toLowerCase()}
        </div>
        <h5 className="text-center">
          <Link
            href="/category/[id]"
            as={`/category/${category.id}`}
          >
            <a>{category.title}</a>
          </Link>
        </h5>
      </div>
    )
};

export default Category;