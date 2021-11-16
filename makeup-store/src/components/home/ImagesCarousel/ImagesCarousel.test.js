import { fireEvent, render } from "@testing-library/react";
import ImagesCarousel from "./ImagesCarousel";

describe("Images Carousel test", () => {
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

  it("renders Images Carousel", () => {
    render(<ImagesCarousel images={images} />);
  });

  it("renders the desired image after previousImageHandler is fired by clicking the back button", () => {
    const component = render(<ImagesCarousel images={images} />);

    const previousButton = component.getByText("<");

    fireEvent.click(previousButton);

    const desiredImage = component.queryByRole("img");

    expect(desiredImage.src).toContain(images[2].src);
  });

  it("renders the desired image after nextImageHandler is fired by clicking the next button", () => {
    const component = render(<ImagesCarousel images={images} />);

    const nextButton = component.getByText(">");

    fireEvent.click(nextButton);

    const desiredImage = component.queryByRole("img");

    expect(desiredImage.src).toContain(images[1].src);
  });
});
