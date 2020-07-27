import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, StyledInput } from './styles';

export default function Input({ name, type, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <div>
        <StyledInput
          ref={inputRef}
          defaultValue={defaultValue}
          type={type}
          onFocus={() => clearError()}
          {...rest}
        />
      </div>
    </Container>
  );
}
