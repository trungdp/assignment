import clsx from "clsx";

interface IErrorMessageProps {
  error?: string;
  className?: string;
}

const ErrorMessage = ({ error, className }: IErrorMessageProps) => {
  if (!error) return null;

  return (
    <div className={clsx("w-full text-left", className)}>
      <p className="text-red-400 text-xs">{error}</p>
    </div>
  );
};

export default ErrorMessage;
