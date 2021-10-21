import React from "react";
import { Root, Overlay, Content, Close } from "@radix-ui/react-dialog";
import classNames from "classnames";
import { Card } from "../card/Card";
import { ActiveButton } from "../buttons/ActiveButton";
import { CrossIcon } from "../../icons/Cross";
import {
  overlayStyle,
  closeStyle,
  contentStyle,
  crossIconStyle,
} from "./Dialog.css";

export function Dialog({ children, className, ...props }) {
  return (
    <Root {...props}>
      <Overlay className={classNames(overlayStyle, className)} />
      {children}
    </Root>
  );
}

export function DialogContent({ children, className, ...props }) {
  return (
    <Content className={classNames(contentStyle, className)} {...props}>
      <Card>
        <Close as={ActiveButton} className={closeStyle}>
          <CrossIcon className={crossIconStyle} />
        </Close>
        {children}
      </Card>
    </Content>
  );
}
