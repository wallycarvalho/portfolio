import React from 'react';
import cs from 'classnames';

type ButtonProp = {
  label: string;
};

export default function Button({
  label,
}: ButtonProp) {
  return (
    <div
      // type="button"
      className={cs(
        'rounded-md',
        'p-0',
        'bg-primary',
        'text-orange-100',
      )}
    >
      {label}
    </div>
  );
}
