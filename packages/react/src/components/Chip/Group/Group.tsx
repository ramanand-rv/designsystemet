import type { HTMLAttributes } from 'react';
import React, { forwardRef, createContext } from 'react';
import cl from 'clsx';

import classes from '../Chip.module.css';

export type ChipGroupContext = {
  size?: 'small' | 'medium' | 'large';
};

export const ChipGroupContext = createContext<ChipGroupContext | null>(null);

export type ChipGroupProps = {
  /**
   * Changes Chip size and gap between chips.
   */
  size?: 'small' | 'medium' | 'large';
} & HTMLAttributes<HTMLUListElement>;

export const Group = forwardRef<HTMLUListElement, ChipGroupProps>(
  ({ children, size = 'medium', ...rest }: ChipGroupProps, ref) => (
    <ul
      {...rest}
      ref={ref}
      className={cl(classes.groupContainer, classes[size], rest.className)}
    >
      <ChipGroupContext.Provider value={{ size }}>
        {React.Children.toArray(children).map((child, index) =>
          React.isValidElement(child) ? (
            <li key={`chip-${index}`}>{child}</li>
          ) : null,
        )}
      </ChipGroupContext.Provider>
    </ul>
  ),
);
