"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogData } from "@/data/blogs";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function Blog() {
  const [outputArray, setfirst] = useState(chunkArray(blogData, 4));
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      <div className="col-xxl-8 col-xl-9">
        <div className="bostami-page-content-wrap">
          <div className="section-wrapper pl-60 pr-60 pt-60">
            <div className="bostami-page-title-wrap mb-15">
              <h2 className="page-title">blogs</h2>
            </div>
          </div>

          <div className="section-wrapper pr-60 pl-60 mb-60">
            <div className="blog-slider-wrap">
              <div className="swiper-container blog-slider-active">
                {showSlider && (
                  <Swiper
                    // {...setting}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      el: ".blog-progation-one",
                      clickable: true,
                    }}
                    // loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                  >
                    {outputArray.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <div className="swiper-slide">
                          <div className="row">
                            {elm.map((elm2, i2) => (
                              <div key={i2} className="col-lg-6 col-md-6">
                                <div
                                  className={`blog-slider-single  ${elm2.bgClass} `}
                                >
                                  <a className="img cursor-pointer">
                                    <Image
                                      width={430}
                                      height={430}
                                      onClick={() => {
                                        setModalContent(elm2);
                                        setShowModal(true);
                                      }}
                                      style={{
                                        width: "100%",
                                        height: "fit-content",
                                      }}
                                      src={elm2.imgSrc}
                                      alt="blog"
                                    />
                                  </a>
                                  <div className="blog-meta">
                                    <span className="blog-date">
                                      {elm2.date}
                                    </span>
                                    <span className="blog-cetagory">
                                      {elm2.category}
                                    </span>
                                  </div>
                                  <h6
                                    className="blog-title"
                                    onClick={() => {
                                      setModalContent(elm2);
                                      setShowModal(true);
                                    }}
                                  >
                                    <a className="cursor-pointer">
                                      {elm2.title}
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <div className="blog-progation blog-progation-one"></div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
            <span>
              © {new Date().getFullYear()} All Rights Reserved by ib-themes.
            </span>
          </div>
        </div>
      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        modalContent={modalContent}
      />
    </>
  );
}
