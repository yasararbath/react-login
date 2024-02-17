import { RegisterOptions } from "react-hook-form";

export type ControlType = "text" | "select" | "number" | "checkbox" | "email" | "textarea" | "radio";


export interface DynamicFieldData {
    fieldName: string;
    label: string;
    type?: string;
    fields?: FieldData[];
    inputType?: string;
    defaultValue?: any;
    config?: {
      required?: string | boolean;
      validate?: (value: any) => string | boolean;
      placeholder?: string;
    };
    options?: Option[];
  }
  
  export interface FieldData {
    fieldName: string;
    label: string;
    inputType: string;
    defaultValue: any;
    config?: {
      required?: string | boolean;
      validate?: (value: any) => string | boolean;
      placeholder?: string;
    };
    options?: Option[];
  }
  
  export interface Option {
    value: string;
    label: string;
  }
  
