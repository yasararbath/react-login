import { DynamicFieldData } from "./Dynamic.control.types";

export const fields: DynamicFieldData[] = [
    {
      fieldName: "name",
      inputType: "text",
      label: "Name",
      defaultValue: "",
      config: {
        required: "Required"
      }
    },
    {
      fieldName: "age",
      inputType: "number",
      label: "Age",
      defaultValue: 18,
      config: {
        required: "Required",
        validate: (value) => value >= 18 || "Still a minor"
      }
    },
    {
      fieldName: "language",
      inputType: "select",
      label: "Language",
      options: [
        { value: "english", label: "English" },
        { value: "french", label: "French" }
      ],
      defaultValue: "english"
    },
    {
      fieldName: "address",
      inputType: "text",
      label: "Address",
      defaultValue: ""
    },
    {
      fieldName: "email",
      inputType: "email",
      label: "Email",
      defaultValue: "",
      config: {
        required: "Required",
        validate: (value) => /\S+@\S+\.\S+/.test(value) || "Invalid email address"
      }
    },
    {
      fieldName: "gender",
      inputType: "radio",
      label: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ],
      defaultValue: "male"
    },
    {
      fieldName: "interests",
      inputType: "checkbox",
      label: "Interests",
      options: [
        { value: "sports", label: "Sports" },
        { value: "music", label: "Music" },
        { value: "reading", label: "Reading" }
      ],
      defaultValue: []
    },
    {
      fieldName: "bio",
      inputType: "textarea",
      label: "Bio",
      defaultValue: ""
    }
  ];
  