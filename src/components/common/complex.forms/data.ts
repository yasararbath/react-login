import { DynamicFieldData } from "./Dynamic.control.types";


export const fields: DynamicFieldData[] = [
    {
      fieldName: "personalInfo",
      label: "Personal Information",
      type: "group",
      fields: [
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
            validate: (value:any) => value >= 18 || "Still a minor"
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
          fieldName: "address",
          inputType: "text",
          label: "Address",
          defaultValue: ""
        },
        {
          fieldName: "nationality",
          inputType: "select",
          label: "Nationality",
          options: [
            { value: "us", label: "United States" },
            { value: "uk", label: "United Kingdom" },
            { value: "ca", label: "Canada" },
            { value: "fr", label: "France" }
          ],
          defaultValue: "us"
        }
      ]
    },
    {
      fieldName: "contactInfo",
      label: "Contact Information",
      type: "group",
      fields: [
        {
          fieldName: "email",
          inputType: "email",
          label: "Email",
          defaultValue: "",
          config: {
            required: "Required",
            validate: (value:any) => /\S+@\S+\.\S+/.test(value) || "Invalid email address"
          }
        },
        {
          fieldName: "phone",
          inputType: "tel",
          label: "Phone",
          defaultValue: "",
          config: {
            required: "Required",
            validate: (value:any) => /^\d{10}$/.test(value) || "Invalid phone number"
          }
        },
        {
          fieldName: "social",
          inputType: "text",
          label: "Social Media",
          defaultValue: "",
          config: {
            placeholder: "Enter your social media handle"
          }
        }
      ]
    },
    {
      fieldName: "interests",
      label: "Interests",
      type: "group",
      fields: [
        {
          fieldName: "hobbies",
          inputType: "checkbox",
          label: "Hobbies",
          options: [
            { value: "sports", label: "Sports" },
            { value: "music", label: "Music" },
            { value: "reading", label: "Reading" }
          ],
          defaultValue: []
        },
        {
          fieldName: "skills",
          inputType: "checkbox",
          label: "Skills",
          options: [
            { value: "programming", label: "Programming" },
            { value: "design", label: "Design" },
            { value: "writing", label: "Writing" }
          ],
          defaultValue: []
        },
        {
          fieldName: "languages",
          inputType: "checkbox",
          label: "Languages",
          options: [
            { value: "english", label: "English" },
            { value: "spanish", label: "Spanish" },
            { value: "french", label: "French" },
            { value: "mandarin", label: "Mandarin" }
          ],
          defaultValue: []
        }
      ]
    },
    {
      fieldName: "education",
      label: "Education",
      type: "group",
      fields: [
        {
          fieldName: "degree",
          inputType: "text",
          label: "Degree",
          defaultValue: "",
          config: {
            placeholder: "Enter your degree"
          }
        },
        {
          fieldName: "institution",
          inputType: "text",
          label: "Institution",
          defaultValue: "",
          config: {
            placeholder: "Enter your institution"
          }
        },
        {
          fieldName: "year",
          inputType: "number",
          label: "Year",
          defaultValue: "",
          config: {
            placeholder: "Enter graduation year"
          }
        }
      ]
    },
    {
      fieldName: "workExperience",
      label: "Work Experience",
      type: "group",
      fields: [
        {
          fieldName: "position",
          inputType: "text",
          label: "Position",
          defaultValue: "",
          config: {
            placeholder: "Enter your position"
          }
        },
        {
          fieldName: "company",
          inputType: "text",
          label: "Company",
          defaultValue: "",
          config: {
            placeholder: "Enter your company"
          }
        },
        {
          fieldName: "years",
          inputType: "number",
          label: "Years of Experience",
          defaultValue: "",
          config: {
            placeholder: "Enter years of experience"
          }
        }
      ]
    },
    {
      fieldName: "bio",
      inputType: "textarea",
      label: "Bio",
      defaultValue: ""
    }
  ];
  