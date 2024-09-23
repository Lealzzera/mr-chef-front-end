import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";

describe("<ButtonComponent /> tests switch", () => {
  it("Should be render a <ButtonComponent />", () => {
    render(
      <ButtonComponent
        textButton="button-text"
        variant="text"
        fullWidth={false}
        loading={false}
      />
    );
  });
});
