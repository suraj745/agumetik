import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/WebdevStyle/techCarousel.module.scss";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useMediaQuery } from "beautiful-react-hooks";
// import required modules
import { FreeMode, Pagination } from "swiper";
export default function TechCarousel() {
  const tablet = useMediaQuery("(max-width:768px)");
  const mobile = useMediaQuery("(max-width:480px)");

  const images = [
    "https://agumentik-software.vercel.app/images/project/react.png",
    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",

    "https://agumentik-software.vercel.app/images/project/react.png",
  ];
  return (
    <>
      <section>
        <section className={styles.right}>
          <ul>
            <li className={styles.title}>
              <h5>Technology</h5>
            </li>
            <li className={styles.heading}>
              <h1>Our Tech Stack</h1>
            </li>
            <li className={styles.design}>
              <span></span>
              <span></span>
            </li>
          </ul>
        </section>
        <section className={styles.car} style={{ marginTop: "2rem" }}>
          <Swiper
            slidesPerView={mobile ? 2 : tablet ? 3 : 5}
            spaceBetween={mobile ? 4 : tablet ? 5 : 8}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={styles.mySwiper}
          >
            {images.map((value) => {
              return (
                <SwiperSlide key={images.length}>
                  <Image src={value} width={250} height={200} alt={"img"} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </>
  );
}
