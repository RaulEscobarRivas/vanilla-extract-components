import React from "react";
import { render } from "@testing-library/react";
import { Copy } from "./Copy";

describe("Copy", () => {
  it("should render default style", () => {
    const { container } = render(<Copy />);

    expect(container).toMatchSnapshot();
  });

  it("should render custom span tag", () => {
    const { container } = render(<Copy as="span" />);

    expect(container).toMatchSnapshot();
  });

  it("should render size style", () => {
    const { container } = render(<Copy size="xs" />);

    expect(container).toMatchSnapshot();
  });

  it("should render shadow style", () => {
    const { container } = render(<Copy shadow />);

    expect(container).toMatchSnapshot();
  });

  it("should render bold style", () => {
    const { container } = render(<Copy bold />);

    expect(container).toMatchSnapshot();
  });

  it("should render ellipsis style", () => {
    const { container } = render(<Copy ellipsis />);

    expect(container).toMatchSnapshot();
  });

  it("should render extraLight style", () => {
    const { container } = render(<Copy extraLight />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=left style", () => {
    const { container } = render(<Copy textAlign="left" />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=right style", () => {
    const { container } = render(<Copy textAlign="right" />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=center style", () => {
    const { container } = render(<Copy textAlign="center" />);

    expect(container).toMatchSnapshot();
  });

  it("should render color style", () => {
    const { container } = render(<Copy color="green.300" />);

    expect(container).toMatchSnapshot();
  });

  it("should render variant styles", () => {
    const { container } = render(
      <Copy
        as="p"
        color="white"
        bold
        shadow
        ellipsis
        textAlign="right"
        size="xl"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
