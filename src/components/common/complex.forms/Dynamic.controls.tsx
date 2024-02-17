
import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "./Dynamic.control.types";

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {}
}: DynamicFieldData) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
      return (
        <input
          id={fieldName}
          type="text"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "select":
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
      case "email": 
    return (
      <input
        type="email"
        id={fieldName}
        {...register(fieldName, config)}
        defaultValue={defaultValue}
      />
    );
    case "number":
      return (
        <input
          type="number"
          id={fieldName}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "radio":
      return (
        <>
          {options.map((o, index) => (
            <div className="radio-tag" key={index}>
              <input
                type="radio"
                id={`${fieldName}_${o.value}`}
                {...register(fieldName, config)}
                value={o.value}
                defaultChecked={defaultValue === o.value}
              />
              <label htmlFor={`${fieldName}_${o.value}`}>{o.label}</label>
            </div>
          ))}
        </>
      );
    case "textarea":
      return (
        <textarea
          id={fieldName}
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    default:
      return <input type="text" />;
  }
  
};
