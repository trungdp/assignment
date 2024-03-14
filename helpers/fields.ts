import * as Yup from "yup";
import { AnyObject } from "yup";
import { DynamicField } from "../types";

type YupBoolean = Yup.BooleanSchema<boolean | undefined, AnyObject, undefined>;
type YupString = Yup.StringSchema<string | undefined, AnyObject, undefined>;
type YupNumber = Yup.NumberSchema<number | undefined, AnyObject, undefined>;

const generateValidations = (
  field: DynamicField
): YupBoolean | YupString | YupNumber | null => {
  if (!field.validations) return null;

  let schema = Yup[field.typeValue || "string"]() as any;

  for (const rule of field.validations) {
    switch (rule.type) {
      case "isEmail":
        schema = (schema as YupString).email(rule.message);
        break;
      case "minLength":
        schema = (schema as YupString).min(rule.value as number, rule.message);
        break;
      case "isTrue":
        schema = (schema as YupBoolean).isTrue(rule.message);
        break;
      case "oneOf":
        schema = (schema as YupString).oneOf(
          [Yup.ref(rule.ref as string)],
          rule.message
        );
        break;
      default:
        schema = schema.required(rule.message);
        break;
    }
  }

  return schema;
};

export const getFieldsData = <T>(fields: DynamicField[]) => {
  let initialValues: { [key: string]: any } = {};

  let validationsFields: { [key: string]: any } = {};

  for (const field of fields) {
    initialValues[field.name] = field.value;

    if (!field.validations) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
  }

  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues: initialValues as T,
    fields,
  };
};
