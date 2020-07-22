import React, { useState, useCallback } from 'react';

import { Container } from './styles';

export default function Input({ icon: Icon, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={15} />}

      <input onFocus={handleFocus} onBlur={handleBlur} {...rest} />
    </Container>
  );
}
