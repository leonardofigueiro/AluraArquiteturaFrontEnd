import React from 'react';
import styled from 'styled-components';
import StyleSheet from '@/theme/StyleSheet';
import { BaseComponent } from '@/theme/BaseComponent';




interface BoxProps {
  tag?: string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet
}

export default function Box({styleSheet, children, tag, ...props}: BoxProps) {
  const Tag = tag || 'div'
  return(
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}
