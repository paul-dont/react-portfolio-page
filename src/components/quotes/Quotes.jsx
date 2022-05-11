import React from 'react';
import './quotes.css';
import Avt1 from '../../assets/mark-twain.png';
import Avt2 from '../../assets/einstein.png';
import Avt3 from '../../assets/plato.png';
import Avt4 from '../../assets/saint-john-chrysostomos.png';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: Avt1,
    name: 'Mark Twain',
    review:
      'There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded..',
  },
  {
    avatar: Avt2,
    name: 'Albert Eistein',
    review: 'The true sign of intelligence is not knowledge but imagination.',
  },
  {
    avatar: Avt3,
    name: 'Plato',
    review:
      'You should not honor men more than truth. & I am the wisest man alive, for I know one thing, and that is that I know nothing.',
  },
  {
    avatar: Avt4,
    name: 'Saint John Chrysostom',
    review:
      'Happiness can only be achieved by looking inward & learning to enjoy whatever life has and this requires transforming greed into gratitude.',
  },
];

const Quotes = () => {
  return (
    <section id="quotes">
      <h5>Some quotes...</h5>
      <h2>...I Endorse</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Quotes;
