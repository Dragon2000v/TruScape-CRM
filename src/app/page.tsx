'use client';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <button
        onClick={goToDashboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Go to Dashboard
      </button>
    </main>
  );
};

export default Home;
