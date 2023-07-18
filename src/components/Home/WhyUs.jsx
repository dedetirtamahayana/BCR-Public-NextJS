import Image from "next/image";
import ImgComplete from "@/assets/img/icon_complete.png";
import ImgTime from "@/assets/img/icon_24hrs.png";
import ImgProfesional from "@/assets/img/icon_professional.png";
import ImgPrice from "@/assets/img/icon_price.png";

const CardWhyUs = ({ icon, title, description }) => {
  return (
    <div className="col-sm-12 col-lg-3">
      <div className="card p-3">
        <div className="mb-2">
          <Image src={icon} />
        </div>
        <div>
          <span className="d-block mb-2">{title}</span>
          <span className="d-block mb-2">{description}</span>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="mb-5" id="why-us">
      <div className="container">
        <div className="text-center text-lg-start fw-bold">
          <h2 className="fw-bold">Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental</p>
        </div>
        <div className="row g-3 fw-bold">
          <CardWhyUs
            icon={ImgComplete}
            title="Mobil Lengkap"
            description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
          />
          <CardWhyUs
            icon={ImgPrice}
            title="Harga Murah"
            description="Harga murah dan bersaing, bisa bandingkan harga kami dengan
              rental mobil lain"
          />
          <CardWhyUs
            icon={ImgTime}
            title="Layanan 24 Jam"
            description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu"
          />
          <CardWhyUs
            icon={ImgProfesional}
            title="Sopir Profesional"
            description="Sopir yang profesional, berpengalaman, jujur, ramah, dan
              selalu tepat waktu"
          />
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
