import { server } from "./../config/";
import AllCategory from '../components/AllCategory';

export default function Categories({ categories }) {
  return (
    <div className="container">
      <div className='clear-fix-small'></div>
      <div className="row">
          <div className="row">
            <div className="section-title">
              <h5>All Categories</h5>
            </div>
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <AllCategory category={category} />
              </div>
            ))}
          </div>
        </div>
        <div className='clear-fix'></div>
      </div>


  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/allCategories`);
  const categories = await res.json();

  return {
    props: {
      categories,
    },
  };
};
