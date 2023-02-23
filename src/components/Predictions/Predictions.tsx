import React from 'react';

const nbaTeams = [
  {
    id: 1,
    name: 'Lakers',
    match: 'Warriors',
  },
  {
    id: 2,
    name: 'Warriors',
    match: 'Celtics',
  },
  {
    id: 3,
    name: 'Celtics',
    match: 'Lakers',
  },
  {
    id: 4,
    name: 'Chicago Bulls',
    match: 'New York Knicks',
  },
  {
    id: 5,
    name: 'New York Knicks',
    match: 'Warriors',
  },
];

const Predictions = () => {
  return (
    <>
      <h1 className='mb-5 text-5xl font-bold'>{`Today's matches`}</h1>
      <p className='mb-5'>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>

      {nbaTeams.map((match) => {
        return (
          <>
            <div className='flex flex-col w-full lg:flex-row mb-5'>
              <div className='grid flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
                {match.name}
              </div>
              <div className='divider lg:divider-horizontal'>VS</div>
              <div className='grid flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
                {match.match}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Predictions;
