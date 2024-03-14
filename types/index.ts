import { ObjectSchema, TypeFromShape } from "yup";
import { AnyObject } from "yup";

export type Package = {
  id: number;
  name: string;
  highlight?: boolean;
  description?: string;
  fields: DynamicField[];
};

export type DynamicField = {
  type: "text" | "email" | "password" | "tel" | "select" | "checkbox" | "radio";
  name: string;
  value?: string;
  placeholder?: string;
  typeValue?: "boolean" | "number";
  validation?: string;
  label?: string;
  validations?: Validation[];
  options?: Opt[];
};

export interface Opt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: "required" | "isEmail" | "minLength" | "isTrue" | "oneOf";
  value?: string | number | boolean;
  message: string;
  ref?: string;
}

export type SchemaForm = ObjectSchema<
  {
    [x: string]: any;
  },
  AnyObject,
  any
>;
