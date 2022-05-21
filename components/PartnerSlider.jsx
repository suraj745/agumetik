// import styles from "../styles/Slider.module.scss";
// export default class PartnerSlider extends Component {
//   render() {
//     return (
//       <div className={styles.sliderContainer}>
//         <div className={styles.mainSlider}>
//           <img src="/images/partnar/1.png" />

//           <img src="/images/partnar/2.png" />

//           <img src="/images/partnar/3.png" />

//           <img src="/images/partnar/4.png" />

//           <img src="/images/partnar/5.png" />

//           <img src="/images/partnar/1.png" />

//           <img src="/images/partnar/2.png" />

//           <img src="/images/partnar/3.png" />

//           <img src="/images/partnar/4.png" />

//           <img src="/images/partnar/5.png" />
//         </div>
//       </div>
//     );
//   }

// }

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useMediaQuery } from "beautiful-react-hooks";

export default function PartnerSlider() {
  const mobile = useMediaQuery("(max-width:480px)");
  const tablet = useMediaQuery("(max-width:810px)");
  const desktop = useMediaQuery("(max-width:1366px)");

  return (
    <>
      <Swiper
        slidesPerView={mobile ? 2 : tablet ? 3 : desktop ? 4 : 5}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/partnar/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/partnar/5.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
