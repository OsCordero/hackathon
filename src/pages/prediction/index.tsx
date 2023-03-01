import Navbar from "@/components/Navbar/Navbar";
import Predictions from "@/components/Predictions/Predictions";
import Teams from "@/components/Teams/Teams";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const Prediction = ({ session }: { session: Session }) => {
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(./images/background-ia.jpeg)`,
          paddingTop: "4rem",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-1/2 relative">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <Teams />
              <Predictions session={session} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prediction;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
