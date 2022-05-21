// import React, { Component } from "react";

// import dynamic from "next/dynamic";
// // const OwlCarousel = dynamic(import("react-owl-carousel3"));
// const OwlCarousel = dynamic(import("react-owl-carousel3"));
// import SwipeCard from "./SwipeCard";
// import styles from "../styles/Swipetest.module.scss";

// const options = {
//   loop: true,
//   nav: false,
//   dots: true,
//   smartSpeed: 2000,
//   margin: 20,
//   autoplayHoverPause: true,
//   autoplay: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 1,
//     },
//     768: {
//       items: 2,
//     },
//     1200: {
//       items: 2,
//     },
//   },
// };

// export default class SwipeTest extends Component {
//   _isMounted = false;
//   state = {
//     display: false,
//   };
//   componentDidMount() {
//     this._isMounted = true;
//     this.setState({ display: true });
//   }

//   componentWillUnmount() {
//     this._isMounted = false;
//   }
//   render() {
//     const details = [
//       {
//         name: "R.Mortein",
//         image: "/images/client-image/1.jpg",
//         position: "Product Manager",
//       },

//       {
//         name: "Edward Bold",
//         image: "/images/client-image/2.jpg",
//         position: "Ceo & Founder",
//       },
//       {
//         name: "Mahindra Jhon",
//         image: "/images/client-image/3.jpg",
//         position: "Ceo & Sustainable designer",
//       },

//       {
//         name: "Lee Munroe",
//         image: "/images/client-image/4.jpg",
//         position: "Underwriter",
//       },
//       {
//         name: "Meg Lanning",
//         image: "/images/client-image/3.jpg",
//         position: "Agent Manager",
//       },
//     ];
//     return (
//       <div className={styles.mainSwiper}>
//         {this.state.display ? (
//           <OwlCarousel {...options}>
//             {details.map((value) => {
//               return (
//                 <SwipeCard
//                   key={details.length}
//                   image={value.image}
//                   personName4={value.name}
//                   position={value.position}
//                 />
//               );
//             })}
//           </OwlCarousel>
//         ) : (
//           ""
//         )}
//       </div>
//     );
//   }
// }

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Swipetest.module.scss";
import SwipeCard from "./SwipeCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { useMediaQuery } from "beautiful-react-hooks";
const SwipeTest = () => {
  const tablet = useMediaQuery("(max-width:820px)");
  const mobile = useMediaQuery("(max-width:480px)");
  const desktop = useMediaQuery("(max-width:1080px)");

  const details = [
    {
      name: "R.Mortein",
      image: "/images/client-image/1.jpg",
      position: "Product Manager",
    },

    {
      name: "Edward Bold",
      image: "/images/client-image/2.jpg",
      position: "Ceo & Founder",
    },
    {
      name: "Mahindra Jhon",
      image: "/images/client-image/3.jpg",
      position: "Ceo & Sustainable designer",
    },

    {
      name: "Lee Munroe",
      image: "/images/client-image/4.jpg",
      position: "Underwriter",
    },
    {
      name: "Meg Lanning",
      image: "/images/client-image/3.jpg",
      position: "Agent Manager",
    },
  ];
  return (
    <section className={styles.container}>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={tablet ? 20 : mobile ? 10 : desktop && 20}
        slidesPerView={mobile ? 1 : 2}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {details.map((value) => {
          return (
            <SwiperSlide>
              <SwipeCard
                key={details.length}
                image={value.image}
                personName4={value.name}
                position={value.position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwipeTest;
