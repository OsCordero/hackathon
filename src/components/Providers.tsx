import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster
        toastOptions={{
          error: {
            style: { border: '1px solid #713200', padding: '16px' },
          },
        }}
      />
      {children}
    </>
  );
};

export default Providers;
