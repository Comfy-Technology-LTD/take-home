import { ErrorBoundary } from "react-error-boundary";

const Cedent = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>} >
      <div>

      </div>
    </ErrorBoundary>
  )
};

export default Cedent;
