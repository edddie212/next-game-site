import { server } from "./../config";
import Post from "../components/Post";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div>
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="blog__details__title">
                <h6>
                  Action, Magic <span>- March 08, 2020</span>
                </h6>
                <h2>Gaming for Beginners: 20 Places of Essential Viewing</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="blog__details__pic">
                <Image
                  src="/blog/details/blog-details-pic.jpg"
                  width={1114}
                  height={558}
                  title="Our Game Blog"
                  alt="Our Game Blog"
                />
                
              </div>
            </div>

            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__text">
                  <p>
                    As a result the last couple of eps haven’t been super
                    exciting for me, because they’ve been more like settling
                    into a familiar and comfortable routine.&nbsp; We’re seeing
                    character growth here but it’s subtle (apart from Shouyou,
                    arguably).&nbsp; I mean, Tobio being an asshole is nothing
                    new – it’s kind of the foundation of his entire character
                    arc.&nbsp; Confronting whether his being an asshole is a
                    problem for the Crows this directly is a bit of an
                    evolution, and probably an overdue one at that, but the
                    overall dynamic with Kageyama is basically unchanged.
                  </p>
                </div>

                {posts.map((post, index) => (
                  <div key={index}>
                    <Post post={post} />
                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/blog/`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
