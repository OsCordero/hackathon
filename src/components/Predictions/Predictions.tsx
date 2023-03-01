import { useFclContext } from "@/context/FclContext";
import { useGetUserPrediction, useSetPrediction } from "@/hooks/usePredictions";
import { useGetRounds } from "@/hooks/useRounds";
import type { Session } from "next-auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Predictions = ({ session }: { session: Session }) => {
  const { data } = useGetRounds();
  const { currentUser } = useFclContext();
  const { mutateAsync, isLoading } = useSetPrediction();
  const { data: userPrediction } = useGetUserPrediction({
    email: session?.user?.email,
  });

  const predictedValue = userPrediction?.prediction;

  const [prediction, setPrediction] = useState<number>(0);

  const endDate = data?.endDate;

  const handleChange = (e: any) => {
    setPrediction(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prediction <= 0) {
      return toast.error("A number prediction is required");
    }
    if (session?.user?.email) {
      try {
        await mutateAsync({
          email: session?.user?.email,
          address: currentUser?.addr,
          prediction: prediction.toString(),
        });
        return toast.success("Prediction set successfully", {
          style: { padding: "16px" },
        });
      } catch (error: any) {
        if (error.response.data.statusCode === 500) {
          return toast.error("Server error");
        }
        error.response.data.error &&
          Object.values(error.response.data.message).map((error: any) =>
            toast.error(error)
          );

        return;
      }
    } else {
      return toast.error("You need to log in first");
    }
  };

  return (
    <div>
      <p></p>
      {predictedValue ? (
        <div className="grid place-items-center">
          <p className="label-text text-white font-bold text-lg ">
            YOUR PREDICTION SUBMITED IS:
          </p>
          <p className="label-text text-white font-bold text-lg ">
            {predictedValue}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              You have until {endDate} to send your prediction
            </label>
            <label className="label">Predicted results:</label>
            <input
              type="number"
              onChange={handleChange}
              placeholder="Type here your prediction"
              className="input input-bordered w-full mb-4 input-secondary text-zinc-900"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Predictions;
