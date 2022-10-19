import { FallbackProps } from 'react-error-boundary';

const ErrorFallbackComponent = (
  {
    error,
    resetErrorBoundary,
  }: FallbackProps) => {

  return (
    <div>
      <div>{error.message}</div>
      <div>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
};

export default ErrorFallbackComponent;
