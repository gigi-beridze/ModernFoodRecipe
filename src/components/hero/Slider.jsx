import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper";
import SliderData from '../../data/slider.json'
import './slider.css'
import "swiper/css"
import "swiper/css/pagination"
import Button from "../UI/Button";

const Slider = () => {
  const pagination = {
    clickable: true
  }
  return (
    <>
      <Swiper
        pagination={pagination}
        className="mySwiper"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
      {SliderData.map((item) => (
        <SwiperSlide data-swiper-autoplay="2000" key={item.title}>
           <img src={item.image} alt={item.title} />
           <div className="swiper-items">
              <span>{item.title}</span>
              <div className="swiper-btn">
                <Button name={item["btn-title"]} />
              </div>
            </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  )
}

export default Slider