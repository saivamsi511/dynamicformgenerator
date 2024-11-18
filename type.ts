export interface JSONSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: Option[];
  validation?: Validation;
}

interface Option {
  value: string;
  label: string;
}

interface Validation {
  pattern: string;
  message: string;
}
