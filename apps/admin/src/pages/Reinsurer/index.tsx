import { ErrorBoundary } from "react-error-boundary";

const Reinsurer = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>} >
      <div>

      </div>
    </ErrorBoundary>
  )
};

export default Reinsurer;
