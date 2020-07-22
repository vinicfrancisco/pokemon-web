import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container, StyledInput, LabelContainer, Label } from './styles';

export default function Input({ name, type, label = null, ...rest }) {
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
    <Container hidden={type === 'hidden'}>
      <div>
        <LabelContainer hidden={label === null}>
          <Label hidden={label === null}>{label}</Label>
        </LabelContainer>

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
