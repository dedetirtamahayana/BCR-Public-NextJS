import Menu from "./Menu";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import CustomButton from "../CustomButton";
import Image from "next/image";
import ImageCar from "@/assets/img/img_car.png";

export const Hero = () => {
  //   const { user } = useSelector((state) => state.login);
  return (
    <section
      className="mb-5"
      id="hero"
      style={{ position: "relative", zIndex: "0" }}
    >
      <Menu />
      <div className="container hero-content mt-3">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6">
            <div className="row">
              <div className="col-lg-11 hero-text fw-bold">
                <h1 className="fw-bold">
                  Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <div>
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                </div>
                {/* {window.location.pathname === "/" && user && user.email ? (
                  <Button to="/search">
                    <CustomButton text="Mulai Sewa Mobil" />
                  </Button>
                ) : (
                  <Button type="button" variant="secondary" disable>
                    Mulai Sewa Mobil
                  </Button>
                )} */}

                <CustomButton
                  onClick={() => router.push("/search")}
                  text="Mulai Sewa Mobil"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="hero-image">
              <Image src={ImageCar} className="img-fluid object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
