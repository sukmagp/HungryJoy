import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { data } from "../../data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Menu from "./Menu";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ marginLeft: "8px", color: "#1E0D0D", fontSize: "24px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ marginLeft: "8px", color: "#1E0D0D", fontSize: "24px" }} />
    </div>
  );
};

const Home = () => {
  return (
    <>
    <div className="carousel" style={{ paddingTop:"5rem"}}>
      <Slider
        autoplay
        autoplaySpeed={3500}
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" style={{ width: "100%", height: "auto"}} />
          </div>
        ))}
      </Slider>
    </div>
    <Menu/>
    </>
  );
};

export default Home;