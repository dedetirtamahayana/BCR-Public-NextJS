import Menu from "./Menu";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import CustomButton from "../CustomButton";
import Image from "next/image";
import ImageCar from "@/assets/img/img_car.png";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  return (
    <section
      className="mb-5"
      id="hero"
      style={{ position: "relative", zIndex: "0" }}
    >
      <Menu />
      <div className="container hero-content mt-5">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6">
            <div className="row">
              <div className="col-lg-11 hero-text">
                <header>
                  <h1 className="fw-bold mb-3">
                    Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                </header>
                <div className="mb-4">
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                </div>
                {router.pathname === "/" && user && user.email ? (
                  <CustomButton
                    onClick={() => router.push("/search")}
                    text="Mulai Sewa Mobil"
                  />
                ) : (
                  <Button type="button" variant="secondary" disable>
                    Mulai Sewa Mobil
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <div className="hero-image">
              <figure>
                <Image
                  src={ImageCar}
                  className="img-fluid object-fit-cover"
                  alt="ImageCar"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
