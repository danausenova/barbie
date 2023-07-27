import Carousel from "react-bootstrap/Carousel";
import picture1 from "../components/picture/BB_ASpot_D_NonMovie_1440x@2x.webp";
import picture2 from "../components/picture/BS_ASP_1_58559371-f1a3-406c-83aa-8e67129f3080_1440x@2x.webp";
import picture3 from "../components/picture/BB_MovieTrailer_Banner_D_a82b9de8-cc24-40b6-b770-105beda709a1_1440x@2x.webp";
import picture4 from "../components/picture/BS_ASpot_D_NonDoll_1440x@2x.webp";
import picture5 from "../components/picture/BS_ASpot_D_ProjArch_1440x@2x.webp";
import picture6 from "../components/picture/BB_ASpot_D_NonMovie_1440x@2x.webp";

function HomePage() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={picture5} alt="First slide" />
        <Carousel.Caption>
          <h5>PARTNER COLLECTIONS</h5>
          <p>
            Explore this curated group of stylish items from some of our
            favorite brands.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture2} alt="Second slide" />
        <Carousel.Caption>
          <h5>CELEBRATING BARBIE THE MOVIE</h5>
          <p>
            Explore this curated group of covetable items from some of our
            favorite brands. We’ll be adding more must-haves all summer long, so
            keep coming back to see what’s new.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture3} alt="Third slide" />
        <Carousel.Caption>
          <h5>NOW IN THEATERS</h5>
          <p>Get your tickets today</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture4} alt="Third slide" />
        <Carousel.Caption>
          <h5>YOUR ONE-STOP SHOP</h5>
          <p>
            Mattel Creations is the home of marvelous must-haves from Barbie The
            Movie. Check it out now, and keep coming back as we add more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture1} alt="Third slide" />
        <Carousel.Caption>
          <h5>MOVIE MAGIC</h5>
          <p>Barbie The Movie Dolls and More</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;
