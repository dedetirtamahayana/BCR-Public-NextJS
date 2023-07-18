import React, { useState } from "react";
import Footer from "@/components/Home/Footer";
import { Row, Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Navigation from "@/components/Home/Menu";
import { Stepper, Step } from "react-form-stepper";

// import Auth from "../../components/auth/index";
import MethodPembayaran from "@/components/Step-Pembayaran/MethodPembayaran/MethodPembayaran";
import UploadPembayaran from "@/components/Step-Pembayaran/Upload/Upload-Pembayaran";
import Eticket from "@/components/Step-Pembayaran/E-ticket/Ticket";
import DetailPesanan from "@/components/Step-Pembayaran/DetailPesanan/DetailPesanan";
import { useRouter } from "next/router";
const Pembayaran = () => {
  const router = useRouter();
  const pembayaranId = router.query.pembayaranId;
  const [content, setContent] = useState(0);
  const RenderContent = () => {
    if (content === 0)
      return (
        <MethodPembayaran
          onClickStepper={(step) => setContent(step)}
          dataId={pembayaranId}
        />
      );
    if (content === 1)
      return (
        <UploadPembayaran
          onClickStepper={(step) => setContent(step)}
          dataId={pembayaranId}
        />
      );
    if (content === 2) return <Eticket dataId={pembayaranId} />;
  };
  return (
    <>
      <Navigation />
      <div className="payment">
        <div className="container">
          <Col>
            <Row>
              <div className="col-lg-5 mb-5">
                <button
                  className="fs-6 fw-bold btn-previous"
                  onClick={() => setContent(0)}
                >
                  <FaArrowLeft className="me-3 mb-1" />
                  Pembayaran
                </button>
              </div>
              <div className="col-lg-7 d-flex justify-content-end align-items-center">
                <Stepper activeStep={content}>
                  <Step label="Pilih Metode" onClick={() => setContent(0)} />
                  <Step label="Bayar" onClick={() => setContent(1)} />
                  <Step label="Tiket" onClick={() => setContent(2)} />
                </Stepper>
              </div>
            </Row>
          </Col>
        </div>
      </div>
      <DetailPesanan dataId={pembayaranId} />
      {RenderContent()}
      <Footer />
    </>
  );
};
export default Pembayaran;
