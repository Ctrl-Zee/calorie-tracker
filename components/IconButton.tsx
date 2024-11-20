import React from "react";
import { Pressable, PressableProps } from "react-native";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const buttonStyles = cva(
  ["flex", "items-center", "justify-center", "transition-colors"],
  {
    variants: {
      variant: {
        primary: ["bg-green-500", "rounded-full"],
        transparent: ["bg-transparent", "text-black"],
      },
      size: {
        small: ["w-12", "h-12"],
        medium: ["w-16", "h-16"],
        large: ["w-20", "h-20"],
        xLarge: ["w-20", "h-20"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type IconButtonProps = VariantProps<typeof buttonStyles> &
  PressableProps & {
    icon: keyof typeof FontAwesome.glyphMap;
    iconSize?: number;
  };

const IconButton = ({
  className,
  variant,
  size,
  iconSize,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <Pressable
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      <FontAwesome name={icon} size={iconSize ?? 24} color="black" />
    </Pressable>
  );
};

export default IconButton;
