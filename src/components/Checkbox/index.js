import React, { useEffect, useRef, useCallback, useState } from 'react';

import { useField } from '@unform/core';

import { Options, Option, StyledIcon } from './styles';

export default function Checkbox({ name, options, ...rest }) {
  const radioRef = useRef(null);

  const [selecteds, setSelecteds] = useState([]);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioRef.current,
      path: 'value',
      setValue: (ref, optionValue) => {
        setSelecteds(optionValue);
      },
      getValue: () => {
        return selecteds;
      },
    });
  }, [fieldName, registerField, selecteds]);

  useEffect(() => {
    setSelecteds(defaultValue === undefined ? [] : defaultValue);
  }, [defaultValue]);

  const handleChange = useCallback(
    (option) => {
      const findOption = selecteds.find((selected) => selected === option);

      if (findOption) {
        return setSelecteds(
          selecteds.filter((selected) => selected !== option)
        );
      }

      setSelecteds([...selecteds, option]);
    },
    [selecteds]
  );

  return (
    <>
      <Options value={selecteds} {...rest}>
        {options.map((option) => (
          <Option
            key={`radio-${fieldName}-${option}`}
            active={selecteds.find((selected) => selected === option)}
            onClick={() => handleChange(option)}
          >
            {option}

            <span>
              <StyledIcon />
            </span>
          </Option>
        ))}
      </Options>
    </>
  );
}
