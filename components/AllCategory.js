import Link from 'next/link';

const AllCategory = ({category})=>{
   return (
    <div>
    <div className="product__item">
      <div
        className="product__item__pic set-bg"
        data-setbg={category.image}
        title={category.title}
        style={{
          backgroundImage: `url(${category.image})`,
        }}
      >
        <div className="ep">{category.title}</div>
      </div>
      <div className="product__item__text text-center ">
        <h5>
          <Link href="/categories/[id]" as={`/categories/${category.id}`}>
            <a>{category.title}</a>
          </Link>
        </h5>
      </div>
    </div>
  </div>
   )
};

export default AllCategory;