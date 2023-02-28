import FclContextProvider from "@/context/FclContext";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FclContextProvider>
      <Toaster
        toastOptions={{
          error: { style: { border: "1px solid #713200", padding: "16px" } },
        }}
      />
      {children}
    </FclContextProvider>
  );
};

export default Providers;
