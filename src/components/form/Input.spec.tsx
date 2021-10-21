import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should render default style', () => {
    const { container } = render(
      <Input />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render error style', () => {
    const { container } = render(
      <Input isInvalid />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with control value', () => {
    const { container } = render(
      <Input value="test" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should append className', () => {
    const { container } = render(
      <Input className="myClass" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const callback = jest.fn();

    render(
      <Input data-testid="field" onChange={callback} />
    );

    // Simulate the change event.
    fireEvent.change(screen.getByTestId("field"), { target: { value: 'test' } })

    expect(callback).toHaveBeenCalledTimes(1);
  });
});