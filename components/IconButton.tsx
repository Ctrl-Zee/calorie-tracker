import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonStyles = cva(['rounded-md', 'transition-colors'], {
  variants: {
    variant: {
      rounded: ['bg-red-500', 'w-[200px]'],
      transparent: ['bg-transparent', 'text-black'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2', 'leading-3'],
      medium: ['text-base', 'py-3', 'px-5', 'leading-5'],
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    variant: 'rounded',
    size: 'medium',
    weight: 'normal',
  },
});

type IconButtonProps = VariantProps<typeof buttonStyles> & PressableProps;

const IconButton = ({
  variant,
  size,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <Pressable
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    ></Pressable>
  );
};

export default IconButton;
