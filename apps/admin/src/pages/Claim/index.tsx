import { ErrorBoundary } from "react-error-boundary";

const Claim = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div></div>
    </ErrorBoundary>
  );
};

export default Claim;
