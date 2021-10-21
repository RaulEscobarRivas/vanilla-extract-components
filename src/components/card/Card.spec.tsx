import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("should render default style", () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });

  it("should render custom class name", () => {
    const { container } = render(<Card className="raulito" />);

    expect(container).toMatchSnapshot();
  });

  it("should render custom span tag", () => {
    const { container } = render(<Card as="span" />);

    expect(container).toMatchSnapshot();
  });

  it("should render md radius style", () => {
    const { container } = render(<Card radius="md" />);

    expect(container).toMatchSnapshot();
  });

  it("should render lg radius style", () => {
    const { container } = render(<Card radius="lg" />);

    expect(container).toMatchSnapshot();
  });

  it("should render xl radius style", () => {
    const { container } = render(<Card radius="xl" />);

    expect(container).toMatchSnapshot();
  });

  it("should render withHover style", () => {
    const { container } = render(<Card withHover />);

    expect(container).toMatchSnapshot();
  });

  it("should render variant styles", () => {
    const { container } = render(<Card as="section" radius="xl" withHover />);

    expect(container).toMatchSnapshot();
  });
});
