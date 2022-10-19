import BoardWriteComponent from '@components/BoardWriteComponent';
import ErrorFallbackComponent from '@components/errors/ErrorFallbackComponent';
import WebLayout from '@layouts/web/WebLayout';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';


const BoardWritePage = () => {
  const [boardWriteError, setBoardWriteError] = useState(true);

  const resetBoardWrite = () => {
    setBoardWriteError(false);
  };


  return (
    <WebLayout>
      <ErrorBoundary
        fallbackRender={ErrorFallbackComponent}
        onReset={resetBoardWrite}
        resetKeys={[boardWriteError]}
      >
        <BoardWriteComponent />
      </ErrorBoundary>
    </WebLayout>
  );
};

export default BoardWritePage;
