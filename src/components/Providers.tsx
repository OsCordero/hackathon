import FclContextProvider from '@/context/FclContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FclContextProvider>
        <Toaster
          toastOptions={{
            error: { style: { border: '1px solid #713200', padding: '16px' } },
          }}
        />
        {children}
      </FclContextProvider>
    </QueryClientProvider>
  );
};

export default Providers;
