import { Package } from "@/types";

export const mockPackagesData: Package[] = [
  {
    id: 1,
    name: "Basic",
    description: "Basic package with limited features",
    fields: [
      {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Your name",
        value: "",
        validations: [
          {
            type: "required",
            message: "Name is required",
          },
          {
            type: "minLength",
            value: 3,
            message: "At least 3 characters required",
          },
        ],
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        value: "",
        validations: [
          {
            type: "required",
            message: "Email is required",
          },
          {
            type: "isEmail",
            message: "Invalid email",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Standard",
    description: "Standard package with some features",
    fields: [
      {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Your name",
        value: "",
        validations: [
          {
            type: "required",
            message: "Name is required",
          },
          {
            type: "minLength",
            value: 3,
            message: "At least 3 characters required",
          },
        ],
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        value: "",
        validations: [
          {
            type: "required",
            message: "Email is required",
          },
          {
            type: "isEmail",
            message: "Invalid email",
          },
        ],
      },
      {
        label: "Phone Number",
        type: "tel",
        name: "phone",
        placeholder: "Phone number",
        value: "",
        validations: [
          {
            type: "required",
            message: "Phone number is required",
          },
          {
            type: "minLength",
            value: 10,
            message: "Phone number must be at least 10 characters",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    description: "Premium package with all the features",
    highlight: true,
    fields: [
      {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Your name",
        value: "",
        validations: [
          {
            type: "required",
            message: "Name is required",
          },
          {
            type: "minLength",
            value: 3,
            message: "At least 3 characters required",
          },
        ],
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        value: "",
        validations: [
          {
            type: "required",
            message: "Email is required",
          },
          {
            type: "isEmail",
            message: "Invalid email",
          },
        ],
      },
      {
        label: "Phone Number",
        type: "tel",
        name: "phone",
        placeholder: "Phone number",
        value: "",
        validations: [
          {
            type: "required",
            message: "Phone number is required",
          },
          {
            type: "minLength",
            value: 10,
            message: "Phone number must be at least 10 characters",
          },
        ],
      },
      {
        label: "Company",
        type: "text",
        name: "company",
        placeholder: "Your company",
        value: "",
      },
    ],
  },
];
