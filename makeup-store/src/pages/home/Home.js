import ContactForm from "components/home/ContactForm/ContactForm";
import ImagesCarousel from "components/home/ImagesCarousel/ImagesCarousel";

const images = [
  {
    src: "test1.jpg",
    alt: "test image 1",
  },
  {
    src: "test2.jpg",
    alt: "test image 2",
  },
  {
    src: "test3.jpg",
    alt: "test image 3",
  },
];

const Home = () => {
  return (
    <>
      <ImagesCarousel images={images} />
      <div className="row">
        <div className="text">
          <h1>Title</h1>
          <p>Lorem</p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
