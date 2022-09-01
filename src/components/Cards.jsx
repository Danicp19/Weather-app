import React from 'react';
import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  return (
    <>
      <div className=''>

        {cities.length > 0 ? (
          <>
            {/* <Card
              primary
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
            /> */}
            {cities.map(c => <Card
              key={c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
            />)}
          </>
        ) : null}
      </div>
    </>
  );
}
