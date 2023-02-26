import Predictions from '@/components/Predictions/Predictions';
import Teams from '@/components/Teams/Teams';
import React from 'react';

const Prediction = () => {
  const prediction = true;
  const todaysPredictionsResult = true;

  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(./images/background-orange-ball.jpg)`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <Teams />
          <Predictions />
        </div>
      </div>
    </div>
  );
};

export default Prediction;
