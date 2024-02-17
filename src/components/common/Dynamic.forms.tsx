import { ErrorMessage } from "@hookform/error-message";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "./Dynamic.control.types";
import { DynamicControl } from "./Dynamic.controls";
import "./Dynamic.forms.css";

interface FormProps {
  fields: DynamicFieldData[];
}

export const DyanmicForms = ({ fields }: FormProps) => {
  const formMethods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting, errors }
  } = formMethods;

  function onSubmit(data:any, error:any) {
    console.log(data);
  }

  return (
    <div className="dynamic-forms">
        <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div className={d.fieldName === 'gender' ?"totals-tag" : ''} key={i}>
            <label htmlFor={d.fieldName}>{d.label}</label>

            <DynamicControl {...d} />

            <ErrorMessage errors={errors} name={d.fieldName} />
          </div>
        ))}
      </FormProvider>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </form>
    </div>
  );
};
