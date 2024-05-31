import { AppRoutes } from './routes';

function App() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold underline'>
        Hello, Tailwind CSS with Vite!
      </h1>
      <p className='text-lg mt-4 text-purple-400'>
        Edit <code>App.tsx</code> and save to reload.
      </p>
      <AppRoutes />
    </div>
  );
}

export default App;
