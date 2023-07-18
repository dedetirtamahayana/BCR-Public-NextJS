import { useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import Navigation from "@/components/Home/Menu";
// import { useLocation, useParams } from "react-router-dom";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import SearchForm from "@/components/SearchForm";
import Footer from "@/components/Home/Footer";
// import Auth from "../../components/auth/index";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import axios from "axios";
import { useEffect } from "react";
// import auth from "../../utils/auth";

const DetailCar = () => {
  const router = useRouter();
  //   const token = auth.getToken();
  //   const location = useLocation();
  //   const { minPrice, maxPrice, name, category, status } = location.state;
  const [dateRange, setDateRange] = useState([null, null]);
  const [dateStart, dateEnd] = dateRange;
  const [rentDay, setRentDay] = useState("");
  const tanggalSewa = new Date(dateEnd) - new Date(dateStart);
  const jumlahHariSewa = tanggalSewa / (1000 * 3600 * 24) + 1;

  const [detailCar, SetDetailCar] = useState({});
  const carId = router.query.carId;
  // const fetch = useRef(true);

  const fetchGetCar = async () => {
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/car/${carId}`,
        {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4OTY5MTI2NX0.Cthqp7EX7gB0hQ5CH6A4-tpXpPXxBWJc3xE_Pg78Iok",
          },
        }
      );
      SetDetailCar(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchGetCar(carId);
  }, [carId]);

  const createNewOrder = async () => {
    const config = {
      headers: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4OTY5MTI2NX0.Cthqp7EX7gB0hQ5CH6A4-tpXpPXxBWJc3xE_Pg78Iok",
      },
    };
    const body = {
      start_rent_at: moment(dateStart).format("YYYY-MM-DD"),
      finish_rent_at: moment(dateEnd).format("YYYY-MM-DD"),
      car_id: carId,
    };
    const { data } = await axios.post(
      "https://api-car-rental.binaracademy.org/customer/order",
      body,
      config
    );
    localStorage.setItem("detailCar", JSON.stringify(data));
    router.push(`/pembayaran/${data.id}`);
  };

  useEffect(() => {
    let day = 0;

    if (dateStart && dateEnd) {
      day = moment(dateEnd).diff(moment(dateStart), "days") + 1;
      setRentDay(day);
    } else {
      setRentDay(0);
    }
  }, [dateStart, dateEnd]);

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0, // -> belakang koma
  });

  return (
    <div>
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }}>
        <Navigation />
      </Container>
      <SearchForm
        isDisabled={true}
        cardTitle="Pencarianmu"
        nameValue={"name"}
        categoryValue={"category"}
        statusValue={"status"}
        minPriceValue={"minPrice"}
        maxPriceValue={"maxPrice"}
      />
      <Container className="mt-5 mb-3">
        <Row>
          <Col className="col-8">
            <Card>
              <Card.Body>
                <Card.Title>Tentang Paket</Card.Title>
                <Card.Title>Include</Card.Title>
                <Card.Text style={{ color: "#8A8A8A" }}>
                  <div>
                    <ul>
                      <li>
                        Apa saja yang termasuk dalam paket misal durasi max 12
                        jam
                      </li>
                      <li>
                        Sudah termasuk bensin selama 12 jam Sudah termasuk Tiket
                      </li>
                      <li>Wisata Sudah termasuk pajak</li>
                    </ul>
                  </div>
                </Card.Text>
                <Card.Title>Exclude</Card.Title>
                <Card.Text style={{ color: "#8A8A8A" }}>
                  <div>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </div>
                </Card.Text>
                <Card.Title>Refund, Reschedule, Overtime</Card.Title>
                <Card.Text style={{ color: "#8A8A8A" }}>
                  <div>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                        Rp.20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-4">
            <Card>
              <Card.Img className="p-3" src={detailCar.image}></Card.Img>
              <Card.Body>
                <Card.Title>{detailCar.name}</Card.Title>
                <Card.Title style={{ color: "#8A8A8A", fontSize: "15px" }}>
                  <div>
                    {(() => {
                      switch (detailCar.category) {
                        case "small":
                          return "2-4 orang";
                        case "medium":
                          return "4-6 orang";
                        case "large":
                          return "6-8 orang";
                        default:
                          return "-";
                      }
                    })()}
                  </div>
                </Card.Title>

                <Container>
                  <Row className="mb-3">
                    {"Tentukan lama sewa mobil (max. 7 hari)"}
                  </Row>
                  <Row className="mb-3">
                    <Datepicker
                      dateFormat="dd-MMMM-yyyy"
                      showIcon
                      id="dateStartEnd"
                      className="datePicker"
                      // eslint-disable-next-line react/jsx-boolean-value
                      selectsRange={true}
                      startDate={dateStart}
                      endDate={dateEnd}
                      onChange={(update) => {
                        setDateRange(update);
                      }}
                      minDate={dateStart ? new Date(dateStart) : new Date()}
                      maxDate={
                        dateStart
                          ? new Date(
                              new Date(dateStart).setDate(
                                new Date(dateStart).getDate() + 6
                              )
                            )
                          : null
                      }
                      showDisabledMonthNavigation
                      isClearable
                      placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                    />
                  </Row>
                  <Row className="mb-3">
                    <Col className="g-0 mb-3">Total</Col>
                    <Col className="g-0 fw-bold text-end mb-3">
                      {formatter.format(detailCar.price)}
                    </Col>
                  </Row>
                  <Row>
                    <Button
                      className="ButtonToPayment"
                      variant="success"
                      onClick={createNewOrder}
                      disabled={!rentDay}
                    >
                      Lanjutkan ke Pembayaran
                    </Button>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailCar;
