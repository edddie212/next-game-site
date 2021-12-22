
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Contacts() {


  return (
    <div>
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="blog__details__title">
                <h6>
                  Send Us <span>a Message</span>
                </h6>
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/blog/blog-8.jpg"
                width={84}
                height={84}
                title="Our Game Blog"
                alt="Our Game Blog"
              />
            </div>
              <ContactForm/>
          </div>
        </div>
      </section>
    </div>
  );
}
