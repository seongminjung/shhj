import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import About1 from "components/About1";
import About2 from "components/About2";
import "css/about.css";
import background_gray from "img/picture/background_gray.png";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <div className="a-carousel">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          // arrows={false}
          showDots={false}
          autoPlay={false}
          // autoPlaySpeed={3000}
          renderButtonGroupOutside={true}
          // customButtonGroup={<ButtonGroup />}
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          // keyBoardControl={false}
          // ssr={true} // means to render carousel on server-side.
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <About1 />
          <About2 />
        </Carousel>
      </div>
    </div>
  );
};

export default About;
