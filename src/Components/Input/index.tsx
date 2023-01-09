import React from 'react';

import { InputText } from 'primereact/inputtext';

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  icon?: string;
}

export function Input({id, label, placeholder, icon}: InputProps) {

  return (
    <div>
      {label && <label htmlFor="username1" className="block">{label}</label>}

      {icon ?
        (
          <span className="p-input-icon-left w-full">
            <i className={`pi pi-${icon}`} />
            <InputText id={id} placeholder={placeholder} aria-describedby={`${id}-help`} className="block w-full" />
          </span>
        )
        :
        (
          <InputText id={id} placeholder={placeholder} aria-describedby={`${id}-help`} className="block w-full"  />
        )
      }
    </div>
  );

}
