import React from 'react';
import { useForm } from 'react-hook-form';
import { JSONSchema } from '../types';

interface FormPreviewProps {
  schema: JSONSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  if (!schema) {
    return <div className="w-full md:w-1/2 p-4">Please provide a JSON schema.</div>;
  }

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-xl font-bold">{schema.formTitle}</h2>
      <p>{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field) => (
          <div key={field.id}>
            <label className="block font-medium">{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="border p-2 w-full"
              />
            )}
            {field.type === 'email' && (
              <input
                type="email"
                placeholder={field.placeholder}
                {...register(field.id, {
                  required: field.required,
                  pattern: {
                    value: new RegExp(field.validation?.pattern ?? ''),
                    message: field.validation?.message,
                  },
                })}
                className="border p-2 w-full"
              />
            )}
            {errors[field.id] && <p className="text-red-500">{errors[field.id].message}</p>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
