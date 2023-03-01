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

const useGetUserPrediction = ({
  email,
}: {
  email: string | undefined | null;
}) => {
  return useQuery(['prediction'], async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}users/get-user-predictions?email=${email}`
    );
    return result.data;
  });
};

export { useSetPrediction, useGetUserPrediction };
