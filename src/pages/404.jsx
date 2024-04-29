import { Button } from '../components';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-primary-light">
        Oops! The page you are looking for does not exist.
      </p>
      <Button
        className="bg-primary-dark min-w-20 rounded-10 py-2 mt-4"
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
