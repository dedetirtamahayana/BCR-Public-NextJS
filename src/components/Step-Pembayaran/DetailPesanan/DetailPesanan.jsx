import moment from "moment";
import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Auth from "@/components/auth";

const DetailPesanan = (props) => {
  const category = {
    Small: "2 - 4 orang",
    small: "2 - 4 orang",
    Medium: "4 - 6 orang",
    medium: "4 - 6 orang",
    Large: "6 - 8 orang",
    large: "6 - 8 orang",
  };

  return props.dataMobil && props.dataMobil.CarId !== null ? (
    <Auth>
      <Container>
        <Card className="detail-box">
          <Row>
            <p className="fw-bold">Detail Pesananmu</p>
            <Col>
              <label>Nama Mobil</label>
              <p className="disable">{props.dataMobil.Car.name}</p>
            </Col>
            <Col>
              <label>Kategori</label>
              <p className="disable">
                {category[props.dataMobil.Car.category]}
              </p>
            </Col>
            <Col>
              <label>Tanggal Mulai Sewa</label>
              <p className="disable">
                {moment(props.dataMobil.start_rent_at).format("DD-MMMM-YYYY")}
              </p>
            </Col>
            <Col>
              <label>Tanggal Akhir Sewa</label>
              <p className="disable">
                {moment(props.dataMobil.finish_rent_at).format("DD-MMMM-YYYY")}
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
      ;
    </Auth>
  ) : (
    <>Gk ada data </>
  );
};

export default DetailPesanan;
