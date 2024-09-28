'use client';

import React from 'react';
import { Field, FieldProps } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > {
  label?: string;
  as?: 'input' | 'select' | 'textarea';
}

export default function InputField({
  label,
  id,
  as = 'input',
  className,
  children,
  ...rest
}: InputFieldProps) {
  const baseClassName = 'p-3 text-sm rounded border border-gray-300 shadow';
  const inputClassName = as === 'input' ? 'h-11' : '';
  const fullClassName =
    `${baseClassName} ${inputClassName} ${className || ''}`.trim();

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field name={rest.name}>
        {({ field }: FieldProps) =>
          React.createElement(
            as,
            {
              ...field,
              ...rest,
              id,
              className: fullClassName,
            },
            children,
          )
        }
      </Field>
    </div>
  );
}
