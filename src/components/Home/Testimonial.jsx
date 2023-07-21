import { Button } from "react-bootstrap";
import ImgStar from "@/assets/img/img-star.png";
import ImgPhoto from "@/assets/img/img_photo.png";
import ImgRight from "@/assets/img/arrow-right.png";
import ImgLeft from "@/assets/img/arrow-left.png";
import Image from "next/image";

const TestimonialCard = ({ img, description, rating, isActive = false }) => {
  const Rating = [...Array(rating)].map((_, i) => (
    <Image src={ImgStar} alt="ImgStar" />
  ));
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <div className="row ">
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="card-testimonial card p-5" style={{ width: "70%" }}>
            <div className="d-flex flex-lg-row flex-sm-column justify-content-center align-items-center">
              <div className="col-lg-4  text-center">
                <Image src={img} alt="person" />
              </div>
              <div className="col-lg-8 col-sm-12 pb-2">
                {Rating.map((item, i) => item)}

                <div className="pb-2 pt-2 fw-bold">{description}</div>
                <div>John Dee 32, Bromo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="mb-4" id="testimonial">
      <div className="container">
        <div className="text-center ">
          <h2 className="fw-bold mb-4">Testimonial</h2>
          <p className="mb-5">
            Berbagai macam review positif dari para pelanggan kami
          </p>
        </div>
        <div
          className="carousel slide"
          id="carouselExampleRide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <TestimonialCard
              isActive={true}
              img={ImgPhoto}
              rating={3}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
            <TestimonialCard
              img={ImgPhoto}
              rating={2}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
            <TestimonialCard
              img={ImgPhoto}
              rating={5}
              description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”"
            />
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <Button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
              variant="none"
            >
              <Image
                src={ImgLeft}
                style={{ width: "32px", height: "32px" }}
                alt="ImgLeft"
              />
            </Button>
            <Button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
              variant="none"
            >
              <Image
                src={ImgRight}
                style={{ width: "32px", height: "32px" }}
                alt="ImgRight"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
