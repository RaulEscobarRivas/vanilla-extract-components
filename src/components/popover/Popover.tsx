import React from "react";
import { Root, Trigger, Content } from "@radix-ui/react-popover";
import type { PopoverProps, PopoverTriggerProps, PopoverContentProps } from "@radix-ui/react-popover";

export const Popover: React.FC<PopoverProps> = props => <Root {...props} />;

export const PopoverTrigger: React.FC<PopoverTriggerProps> = props => <Trigger {...props} />;

export const PopoverContent: React.FC<PopoverContentProps> = props => <Content {...props} />;