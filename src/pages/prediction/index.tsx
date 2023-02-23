import Predictions from '@/components/Predictions/Predictions';
import React from 'react';

const Prediction = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url(./images/background-nba.png)`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>

      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <Predictions />
          <div>
            <label className='label'>
              <span className='label-text text-white font-bold text-lg '>
                Predicted results:
              </span>
            </label>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs mb-4 input-secondary text-zinc-900'
            />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
