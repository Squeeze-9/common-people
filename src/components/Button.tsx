import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

const CommonButton: React.FunctionComponent = (name) => {
  return <Button>{name}</Button>;
};

export default CommonButton;
