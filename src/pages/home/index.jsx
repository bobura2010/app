import CarouselComponent from "../../components/carousel"
import Container from "../../components/Container"
import Products from "./components/Products";
import Homework from "./components/Homework"


function HomePage() {
  return (
		<Container>
			<Homework />
			<div className="w-full h-full flex flex-col gap-[2rem]">
        <CarouselComponent />
        <Products/>
			</div>
		</Container>
	);
}

export default HomePage;
