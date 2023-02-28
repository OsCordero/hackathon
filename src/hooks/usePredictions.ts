import { Prediction } from '@/types/predictions';
import axios from 'axios';
import { useMutation } from 'react-query';

const useSetPrediction = () => {
  return useMutation(({ email, address, prediction }: Prediction) =>
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}users/get-prediction`, {
      email,
      address,
      prediction,
    })
  );
};

export { useSetPrediction };
