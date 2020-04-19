import React from 'react';
import { Content } from './styles';

function Container({ children, width = 1200 }) {
  return <Content width={width}>{children}</Content>;
}

export default Container;
