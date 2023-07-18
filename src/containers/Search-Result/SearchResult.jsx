import { Row, Col, Container } from "react-bootstrap";
import Navigation from "@/components/Home/Menu";
import { useSearchParams } from "next/navigation";
import SearchForm from "@/components/SearchForm";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Home/Footer";

const ResultCar = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const category = searchParams.get("category");
  const status = searchParams.get("isRented");
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api-car-rental.binaracademy.org/customer/v2/car`,
      {
        params: {
          name: name,
          category: category,
          minPrice: searchParams.get("minPrice"),
          maxPrice: searchParams.get("maxPrice"),
          isRented: status,
        },
      }
    );
    console.log(data);
    setCars(data.cars);
  };
  useEffect(() => {
    // console.log("use effect trigger");
    fetchData();
  }, [searchParams]);
  // console.log("render");

  return (
    <div>
      {/* <Hero withHeroContent={false} /> */}
      <Container fluid style={{ height: "30vh", background: "#F1F3FF" }}>
        <Navigation />
      </Container>
      <SearchForm
        nameValue={name}
        categoryValue={category}
        statusValue={status}
        // priceValue={searchParams.get("price")}
        minPriceValue={
          searchParams.get("minPrice") && parseInt(searchParams.get("minPrice"))
        }
        maxPriceValue={
          searchParams.get("maxPrice") && parseInt(searchParams.get("maxPrice"))
        }
        buttonType="edit"
        cardTitle="Pencarianmu"
      />
      <Container className="mt-5 mb-3">
        <Row lg={3} sm={1} md={2} className="">
          {cars.map((car) => {
            return (
              <Col key={car.id}>
                <CarCard
                  car={car}
                  minPrice={
                    searchParams.get("minPrice") &&
                    parseInt(searchParams.get("minPrice"))
                  }
                  maxPrice={
                    searchParams.get("maxPrice") &&
                    parseInt(searchParams.get("maxPrice"))
                  }
                  name={searchParams.get("name")}
                  category={searchParams.get("category")}
                  status={searchParams.get("isRented")}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ResultCar;
