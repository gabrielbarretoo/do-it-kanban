import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import { Container, Item } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
    defaultChecked?: boolean | false;
    color?: string;
  }[];
}
const CheckboxInput: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
        <p>Tags:</p>
      {options.map((option, index) => (
        <Item
            htmlFor={option.id}
            key={option.id}
            background={option.color}
        >
            <input
                defaultChecked={option.defaultChecked}
                ref={ref => {
                inputRefs.current[index] = ref as HTMLInputElement;
                }}
                value={option.value}
                type="checkbox"
                id={option.id}
                {...rest}
            />
            <p>{option.label}</p>
        </Item>
      ))}
    </Container>
  );
};

export default CheckboxInput;