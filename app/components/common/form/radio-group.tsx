import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";
import { DynamicField } from "@/types";

const Radio = ({ name, label, options, ...props }: DynamicField) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col relative mb-4">
      <div className="flex items-center gap-4">
        <label>{label}</label>
        <section className="flex justify-between flex-1">
          {options &&
            options.map(({ desc, value }) => (
              <label
                key={value}
                className="flex items-center gap-1 cursor-pointer hover:underline rounded p-1"
              >
                <input
                  {...register(name)}
                  {...props}
                  value={value}
                  type="radio"
                />
                {desc}
              </label>
            ))}
        </section>
      </div>
      <ErrorMessage className="absolute -bottom-5 right-0" error={error} />
    </div>
  );
};

export default Radio;
