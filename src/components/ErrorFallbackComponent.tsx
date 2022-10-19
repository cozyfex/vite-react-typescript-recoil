import { MouseEventHandler } from 'react';

const ErrorFallbackComponent = (
  {
    error,
    resetErrorBoundary,
  }: { error: Error, resetErrorBoundary: MouseEventHandler<HTMLButtonElement> }) => {

  return (
    <div>
      <div>{error.message}</div>
      <div>
        <button onClick={resetErrorBoundary}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ErrorFallbackComponent;
