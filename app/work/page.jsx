"use client";
import { useState, useEffect } from "react";
import css from "../ui/work.module.css";
import { WorkCard } from "../components/WorkCard";
import VideoPlayer from "../components/VideoPlayer";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Mousewheel, FreeMode } from "swiper/modules";

export default function Page() {
  const pathname = usePathname();
  const [workHovered, updateWorkHovered] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 801
  );

  function handleWindowSizeChange() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [windowWidth]);


  useEffect(() => {
    document.body.style.backgroundColor = pathname.includes("work")
      ? "#e9e7e5"
      : "#395fff";

    return () => {
      document.body.style.backgroundColor = "#395fff"; // reset on unmount
    };
  }, [pathname]);

  const workItems = [
    {
      id: 1,
      title: "Bee's Knees Dog Walking",
      techUsed: "Next.js, Matter.js, Tailwind CSS",
      services: ["Web design & development"],
      date: "2025",
      videosrc:
        "https://player.vimeo.com/video/1073982190?h=435ac54447&title=0&byline=0&portrait=0&muted=1&autopause=0&controls=0&badge=0&player_id=0&app_id=58479",
      image: "/beesknees-image.png",
      url: "https://www.beeskneesdogwalking.xyz/",
    },
    {
      id: 2,
      title: "Outlaw718",
      techUsed: "Framer",
      services: ["Web design & development"],
      date: "2024",
      videosrc:
        "https://player.vimeo.com/video/1073977824?h=3d89d04b87&title=0&byline=0&portrait=0&muted=1&autopause=0&controls=0&badge=0&player_id=0&app_id=58479",
      image: "/beesknees-image.png",
      url: "https://www.outlaw718.com/",
    },
    {
      id: 3,
      title: "Juicy Yoga",
      techUsed: "React.js",
      services: ["Web design & development"],
      date: "2024",
      videosrc:
        "https://player.vimeo.com/video/1073981495?h=ef13941701&title=0&byline=0&portrait=0&muted=1&autopause=0&controls=0&badge=0&player_id=0&app_id=58479",
      image: "/beesknees-image.png",
      url: "https://juicy.yoga/",
    },
    // {
    //   id: 4,
    //   title: "Miss Gloria Design",
    //   techUsed: "Next.js",
    //   services: ["Web design & development"],
    //   date: "2025",
    //   videosrc:
    //     "https://player.vimeo.com/video/1073977824?h=3d89d04b87&title=0&byline=0&portrait=0&muted=1&autopause=0&controls=0&badge=0&player_id=0&app_id=58479",
    //   image: "/beesknees-image.png",
    //   url: "https://www.instagram.com/missgloriadesign/?hl=en",
    // },
  ];

  return (
    <div className={css.work}>
      <Swiper
        className={css.myswiper}
        spaceBetween={windowWidth > 800 ? 20 : 100}
        slidesPerView={windowWidth > 1224 ? 1.7 : windowWidth > 800 ? 1.4 : 2.5}
        freeMode={true}
        direction={windowWidth > 800 ? "horizontal" : "vertical"}
        // loop={true}
        // autoHeight={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        mousewheel={true}
        modules={[Mousewheel, FreeMode]}
      >
        {workItems.map((item, i) => (
          <SwiperSlide key={item.id} className={css.swiperslide}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={css.workCard}
              key={item.title}
              id={item.id}
              onMouseEnter={(event) => {
                updateWorkHovered(event.currentTarget.id);
              }}
              onMouseLeave={(_) => {
                updateWorkHovered(0);
              }}
              style={{
                paddingBottom: i === workItems.length - 1 ? "100px" : "0px",
              }}
            >
              <VideoPlayer videosrc={item.videosrc} />

              <div
                className={
                  workHovered == item.id || windowWidth <= 800
                    ? css.workCardTextFadeIn
                    : css.workCardTextFadeOut
                }
                style={{
                  paddingTop: "5px",
                  height: "70px",
                }}
              >
                <div className={css.workCardText}>{item.title}</div>
                <div className={css.workCardText}>{item.services}</div>
                <div className={css.workCardText}>{item.techUsed}</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
