import React from 'react'
import './Testimonials.css'
const testimonials = [
  {
    name: 'Aleah May',
    review:
      'Artificial Elegance has the most stunning artificial flower arrangements I’ve seen. The quality is top-notch and lasts forever!',
  },
  {
    name: 'Juny Yale',
    review:
      'I bought a floral mug as a gift, and it was beautifully crafted. The packaging and delivery were just as elegant.',
  },
  {
    name: 'Jermaine',
    review:
      'Their fresh flowers are so vibrant and last longer than any others I’ve bought. The customer service was warm and helpful.',
  },
  {
    name: 'Pope Joe',
    review:
      'The home decor from Artificial Elegance adds such charm to my living space. Highly recommend their seasonal collections!',
  },
  {
    name: 'Sekharius',
    review:
      'The decorations from Artificial Elegance are so stylish and add a touch of elegance to any space. The customer service was exceptional.',
  },
  {
    name: 'Jon Pibbles',
    review:
      'Their collections the best of the best. The quality is top-notch and lasts forever!',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2 className="heading">What our customers say</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{t.review}"</p>
            <p className="testimonial-name">— {t.name}</p>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;