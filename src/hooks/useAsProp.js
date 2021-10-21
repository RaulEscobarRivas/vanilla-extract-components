import classNames from "classnames";

/*
 * Hook to extract "as" prop & merge className props
 * returns [as, mergedProps]
 */

export function useAsProp(props, customProps) {
  const { as = "div", ...otherProps } = props;
  const classes = classNames(customProps?.className, props?.className);

  return [as, { ...otherProps, className: classes }];
}
