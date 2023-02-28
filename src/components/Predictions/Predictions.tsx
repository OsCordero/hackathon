import { toast } from "react-hot-toast";
import React, { useState } from "react";

const Predictions = ({
  showPrediction,
  show,
}: {
  showPrediction: (show: boolean) => void;
  show: boolean;
}) => {
  const [totalResult, setTotalResult] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<number>(0);

  const handleClickPredictionResult = () => {
    setTotalResult(true);
  };

  const handleChange = (e: any) => {
    setPrediction(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (prediction <= 0) {
      return toast.error("A number prediction is required");
    }
    showPrediction(true);
  };

  const showResults = () => {
    if (show && !totalResult) {
      return (
        <div className=" text-center text-neutral-content flex flex-col">
          <label className="label ">
            <span className="label-text text-white font-bold text-2xl ">
              Your predition:
            </span>
          </label>
          <div className="grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold">
            500
          </div>
          <br />
          <span className="label-text text-white font-bold text-2xl ">
            Your won 100 points!
          </span>
          <button
            className="btn btn-primary"
            onClick={handleClickPredictionResult}
          >
            Go to see all your todays predictions
          </button>
        </div>
      );
    }
    if (totalResult) {
      return (
        <div className=" text-center text-neutral-content flex flex-col">
          <label className="label ">
            <span className="label-text text-white font-bold text-2xl ">
              Your todays preditions:
            </span>
          </label>
          <div className="grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold">
            500
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="label-text text-white font-bold text-lg ">
              Predicted results:
            </span>
          </label>
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
    );
  };

  return <div>{showResults()}</div>;
};

export default Predictions;
