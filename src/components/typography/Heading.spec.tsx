import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("should render default style", () => {
    const { container } = render(<Heading />);

    expect(container).toMatchSnapshot();
  });

  it("should render custom h3 tag", () => {
    const { container } = render(<Heading as="h3" />);

    expect(container).toMatchSnapshot();
  });

  it("should render size style", () => {
    const { container } = render(<Heading size="h6" />);

    expect(container).toMatchSnapshot();
  });

  it("should render shadow style", () => {
    const { container } = render(<Heading shadow />);

    expect(container).toMatchSnapshot();
  });

  it("should render ellipsis style", () => {
    const { container } = render(<Heading ellipsis />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=left style", () => {
    const { container } = render(<Heading textAlign="left" />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=right style", () => {
    const { container } = render(<Heading textAlign="right" />);

    expect(container).toMatchSnapshot();
  });

  it("should render textAlign=center style", () => {
    const { container } = render(<Heading textAlign="center" />);

    expect(container).toMatchSnapshot();
  });

  it("should render color style", () => {
    const { container } = render(<Heading color="red.600" />);

    expect(container).toMatchSnapshot();
  });

  it("should render variant styles", () => {
    const { container } = render(
      <Heading
        as="h2"
        color="gray.200"
        shadow
        ellipsis
        textAlign="left"
        size="superhero"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
