import React from "react";
import { Header, Trigger } from "@radix-ui/react-accordion";
import { headerStyle, iconStyle, triggerStyle } from "./AccordionTrigger.css";
import { ChevronLeftIcon } from "../../icons/ChevronLeft";

export const AccordionTrigger: React.FC<any> = ({ children, ...props }) => (
  <Header className={headerStyle} {...props}>
    <Trigger className={triggerStyle}>
      {children}
      <ChevronLeftIcon className={iconStyle} />
    </Trigger>
  </Header>
);
