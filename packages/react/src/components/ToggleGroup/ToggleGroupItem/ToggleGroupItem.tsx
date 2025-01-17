import type { ButtonHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cl from 'clsx';

import { Button } from '../../Button';
import { RovingTabindexItem } from '../../../utilities/RovingTabIndex';

import classes from './ToggleGroupItem.module.css';
import { useToggleGroupItem } from './useToggleGroupitem';

export type ToggleGroupItemProps = {
  /** The value of the ToggleGroupItem. If not set, the string value of the items children will be used. */
  value?: string;
  /** Icon to be displayed on the ToggleGroupItem */
  icon?: React.ReactNode;
  /** The text to be displayed on the ToggleGroupItem */
  children?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'children'>;

export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleGroupItemProps
>((props, ref) => {
  const { children, icon, className, ...rest } = props;
  const { active, size = 'medium', buttonProps } = useToggleGroupItem(props);
  return (
    <RovingTabindexItem
      {...buttonProps}
      className={cl(classes.toggleGroupItem, className)}
      as={Button}
      value={rest.value}
      icon={icon}
      color='first'
      variant={active ? 'primary' : 'tertiary'}
      size={size}
      iconPlacement='left'
      ref={ref}
      {...rest}
    >
      {children}
    </RovingTabindexItem>
  );
});
