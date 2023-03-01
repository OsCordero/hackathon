import { Prediction } from '@/types/predictions';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

const useSetPrediction = () => {
  return useMutation(({ email, address, prediction }: Prediction) =>
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}users/get-prediction`, {
      email,
      address,
      prediction,
    })
  );
};

const useGetUserPrediction = () => {
  return useMutation(({ email }: { email: string | null | undefined }) =>
    axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/get-user-predictions`,
      {
        email,
      }
    )
  );
};

export { useSetPrediction, useGetUserPrediction };
