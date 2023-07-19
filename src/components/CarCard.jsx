import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const CarCard = ({ car, minPrice, maxPrice, name, category, status }) => {
  const router = useRouter();
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0, // -> belakang koma
  });

  const selectCar = (car) => {
    router.push(`/detail-car/${car.id}`, {
      state: {
        name: name,
        status: status,
        category: category,
        minPrice: minPrice,
        maxPrice: maxPrice,
        car: car,
      },
    });
  };
  return (
    <Card className="mb-5">
      <Card.Img className="p-3" src={car.image} alt="image-car"></Card.Img>
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Title>{formatter.format(car.price)} / hari</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Card.Text>
        <Button
          variant="success"
          className="w-100"
          onClick={() => {
            selectCar(car);
          }}
        >
          Pilih Mobil
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CarCard;
