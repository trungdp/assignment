import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";
import { DynamicField } from "@/types";

const Checkbox = ({ name, label, ...props }: DynamicField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="relative mb-4">
      <label className="flex gap-2 items-center cursor-pointer w-fit">
        <input {...props} {...register(name)} />
        {label}
      </label>

      <ErrorMessage className="absolute -bottom-5 right-0" error={error} />
    </div>
  );
};

export default Checkbox;
