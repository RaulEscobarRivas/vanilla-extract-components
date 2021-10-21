import classNames from 'classnames';
import { ButtonProps, ButtonCustomProps, ButtonReturn } from './useButton.types';

export function useButton(props: ButtonProps, customProps: ButtonCustomProps): ButtonReturn {
  const { as = 'button', ...otherProps } = props;
  const classes = classNames(customProps?.className, props?.className);

  return [
    as,
    {
      ...otherProps,
      className: classes,
    }
  ];
}