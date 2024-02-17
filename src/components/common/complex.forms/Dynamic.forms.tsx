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
        {fields.map((section:any, index:any) => (
          <div className="section" key={index}>
            <h2>{ section.type === 'group' && section.label}</h2>
            {section.type === 'group' ? section.fields.map((field:any, i:any) => (
              <div className={field.fieldName === 'gender' ?"field totals-tag" : 'field'}  key={i}>
                <label htmlFor={field.fieldName}>{field.label}</label>
                <DynamicControl {...field} />
                <ErrorMessage errors={errors} name={field.fieldName} />
              </div>
            )) :  <div className={section.fieldName === 'gender' ?"totals-tag" : ''} key={index}>
            <label htmlFor={section.fieldName}>{section.label}</label>

            <DynamicControl {...section} />

            <ErrorMessage errors={errors} name={section.fieldName} />
          </div>
          }
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
