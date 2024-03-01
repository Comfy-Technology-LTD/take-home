import { ErrorBoundary } from "react-error-boundary";

const Settings = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div></div>
    </ErrorBoundary>
  );
};

export default Settings;
