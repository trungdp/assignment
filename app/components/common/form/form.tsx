import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./input";
import Select from "./select";
import Radio from "./radio-group";
import Checkbox from "./checkbox";
import { DynamicField, SchemaForm } from "@/types";
import { useState } from "react";

interface IFormProps {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues: unknown;
  validationSchema: SchemaForm;
  fields: DynamicField[];
}

export const Form = ({ ...props }: IFormProps) => {
  const [loading, setLoading] = useState(false);
  const {
    initialValues,
    fields,
    onSubmit: SubmitProps,
    validationSchema,
    labelButtonSubmit = "Submit",
  } = props;

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...(initialValues as any) },
  });

  const onSubmit = async (data: unknown) => {
    setLoading(true);
    await SubmitProps(data);
    formMethods.reset();
    setLoading(false);
  };

  const renderFields = () =>
    fields.map(({ value, ...field }) => {
      switch (field.type) {
        case "select":
          return <Select {...field} key={field.name} />;
        case "checkbox":
          return <Checkbox {...field} key={field.name} />;
        case "radio":
          return <Radio {...field} key={field.name} />;
        default:
          return <Input {...field} key={field.name} />;
      }
    });

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="bg-secondary p-6 pt-5 flex flex-col gap-2 border w-full min-h-[390px]"
      >
        <section className="flex-1 flex flex-col gap-3">
          {renderFields()}
        </section>
        <button
          className="text-white bg-slate-700 hover:bg-slate-900 font-bold px-6 py-3 rounded shadow outline-none focus:outline-none"
          type="submit"
          disabled={loading}
        >
          {labelButtonSubmit}
        </button>
      </form>
    </FormProvider>
  );
};
