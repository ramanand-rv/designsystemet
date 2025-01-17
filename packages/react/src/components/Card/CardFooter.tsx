import React, { forwardRef, type HTMLAttributes } from 'react';
import cl from 'clsx';

import classes from './Card.module.css';

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cl(classes.footer, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  ),
);
