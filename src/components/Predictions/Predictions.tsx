import { toast } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { useFclContext } from '@/context/FclContext';
import { useSession } from 'next-auth/react';
import { useGetUserPrediction, useSetPrediction } from '@/hooks/usePredictions';
import { useGetRounds } from '@/hooks/useRounds';

const Predictions = ({
  showPrediction,
  show,
}: {
  showPrediction: (show: boolean) => void;
  show: boolean;
}) => {
  const { data } = useGetRounds();
  const { data: session } = useSession();
  const { currentUser } = useFclContext();
  const { mutateAsync, isLoading } = useSetPrediction();
  const { data: userPrediction, mutate } = useGetUserPrediction();
  const predictedValue = userPrediction?.data.prediction;

  const [totalResult, setTotalResult] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<number>(0);

  useEffect(() => {
    if (session?.user?.email) {
      mutate({ email: session?.user?.email });
    }
  }, [session?.user?.email]);

  // @ts-ignore;
  const endDate = data?.endDate;

  const handleClickPredictionResult = () => {
    setTotalResult(true);
  };

  const handleChange = (e: any) => {
    setPrediction(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prediction <= 0) {
      return toast.error('A number prediction is required');
    }
    if (session?.user?.email && currentUser?.addr) {
      try {
        await mutateAsync({
          email: session?.user?.email,
          address: currentUser?.addr,
          prediction: prediction.toString(),
        });
        return toast.success('Prediction set successfully', {
          style: { padding: '16px' },
        });
      } catch (error: any) {
        if (error.response.data.statusCode === 500) {
          return toast.error('Server error');
        }
        error.response.data.error &&
          Object.values(error.response.data.message).map((error: any) =>
            toast.error(error)
          );

        return;
      }
    } else {
      return toast.error('You need to log your wallet');
    }
    showPrediction(true);
  };

  const showResults = () => {
    if (show && !totalResult) {
      return (
        <div className=' text-center text-neutral-content flex flex-col'>
          <label className='label '>
            <span className='label-text text-white font-bold text-2xl '>
              Your predition:
            </span>
          </label>
          <div className='grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
            500
          </div>
          <br />
          <span className='label-text text-white font-bold text-2xl '>
            Your won 100 points!
          </span>
          <button
            className='btn btn-primary'
            onClick={handleClickPredictionResult}
          >
            Go to see all your todays predictions
          </button>
        </div>
      );
    }
    if (totalResult) {
      return (
        <div className=' text-center text-neutral-content flex flex-col'>
          <label className='label '>
            <span className='label-text text-white font-bold text-2xl '>
              Your todays preditions:
            </span>
          </label>
          <div className='grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold'>
            500
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        {predictedValue ? (
          <div className='grid place-items-center'>
            <label className='label'>
              <span className='label-text text-white font-bold text-lg '>
                YOUR PREDICTION SUBMITED IS:
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-white font-bold text-lg '>
                {predictedValue}
              </span>
            </label>
          </div>
        ) : (
          <>
            <div>
              <label className='label'>
                <span className='label-text text-orange-700 font-bold text-lg '>
                  You have until {endDate} to send your prediction
                </span>
              </label>
              <label className='label'>
                <span className='label-text text-white font-bold text-lg '>
                  Predicted results:
                </span>
              </label>
              <input
                type='number'
                onChange={handleChange}
                placeholder='Type here your prediction'
                className='input input-bordered w-full mb-4 input-secondary text-zinc-900'
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Submit
            </button>
          </>
        )}
      </form>
    );
  };

  return <div>{showResults()}</div>;
};

export default Predictions;
