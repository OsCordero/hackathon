import Navbar from "@/components/Navbar/Navbar";
import Predictions from "@/components/Predictions/Predictions";
import Teams from "@/components/Teams/Teams";
import React, { useState } from "react";

const Prediction = () => {
  const [showPrediction, setShowPrediction] = useState<boolean>(false);
  const handleClickShowPrediction = () => {
    setShowPrediction(true);
  };

  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(./images/background-ia.jpeg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-1/2 relative">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <Teams show={showPrediction} />
              <Predictions
                showPrediction={handleClickShowPrediction}
                show={showPrediction}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prediction;
