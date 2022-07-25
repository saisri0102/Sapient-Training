import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import withStyles from "../../withstyle";
import { CarouselStyle } from "./Carousel.style";
import Image from "../../atoms/Image/image";

const Slideshow = (props) => {
  const {
    slides,
    interval,
    showArrows,
    width,
    height,
    className,
    size,
    autoPlay,
    showStatus,
    infiniteLoop,
    showThumbs,
    headingColor
  } = props;

  return (
    <div data-testid="carousel" width={width} className={`${className}`}>
      <Carousel
        showThumbs={showThumbs}
        useKeyboardArrows
        interval={interval}
        infiniteLoop={infiniteLoop}
        showArrows={showArrows}
        autoPlay={autoPlay}
        showStatus={showStatus}

      >
        {slides.map(({ heading, src, alt }) => (
          <div>
            <div className="heading">
              <h2>{heading}</h2>
            </div>
            <Image src={src} alt={alt} varient={size} height={height} />
            <div className="dotHeight"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  interval: PropTypes.number,
  showArrows: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
  showThumbs: PropTypes.bool,
  autoPlay: PropTypes.bool,
  showStatus: PropTypes.bool,
  infiniteLoop: PropTypes.bool,
  headingColor:PropTypes.string
};

Slideshow.defaultProps = {
  slides: [],
  interval: 2000,
  showArrows: false,
  width: "",
  height: "",
  showThumbs: false,
  autoPlay: true,
  showStatus: false,
  infiniteLoop: true,
};

export default withStyles(Slideshow, CarouselStyle);

export { Slideshow as CarouselNotStyled };
