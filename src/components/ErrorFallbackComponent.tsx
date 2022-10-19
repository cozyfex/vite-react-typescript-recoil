const ErrorFallbackComponent = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: Function }) => {
  return (
    <div>{error.message}</div>
  );
};

export default ErrorFallbackComponent;
