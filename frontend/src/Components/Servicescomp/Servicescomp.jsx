import React, { useState } from 'react';
import './Servicescomp.css';

//ASSETS
import weddings from '../../assets/wedding.jpg';
import events from '../../assets/event.jpg';
import seasonal from '../../assets/seasonal.jpg';

const services = [
  {
    number: 1,
    service: 'Wedding Decorations',
    desc: 'Botanical Coffee Shop in Prague offers a serene oasis with a lush plant wall and art detail coffee.',
    exinfo: 'Fees may vary by location and season',
    bgImage: `url(${weddings})`,
  },
  {
    number: 2,
    service: 'Event Styling',
    desc: 'Berlin’s dynamic coffee culture features innovative shops where baristas experiment with new brewing techniques.',
    bgImage: `url(${events})`,
    exinfo: 'Birthdays, Corporate Events, Parties & etc.',
  },
  {
    number: 3,
    service: 'Seasonal Bouquets',
    desc: 'Vienna’s coffee scene blends historic cafés and modern spots, all dedicated to perfecting the art of coffee making.',
    bgImage: `url(${seasonal})`,
    exinfo: 'Bouquet towers delivery applies to all locations.',
  },
];

const Servicescomp = () => {
  const [activenumber, setActivenumber] = useState(1);

  return (
    <div className="services-container">
      {services.map((service) => (
        <div
          key={service.number}
          className={`servicescard ${activenumber === service.number ? 'active' : 'inactive'}`}
          style={{ backgroundImage: service.bgImage }}
          onClick={() => setActivenumber(service.number)}
        >
          <div className="overlay2">
            <h2>{service.service}</h2>
            <p>{service.desc}</p>
            {activenumber === service.number && service.exinfo && (
              <span className="exinfo">{service.exinfo}</span>
            )}
            <button>Navigate</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicescomp;
