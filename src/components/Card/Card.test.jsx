import { create } from "react-test-renderer";
import Card from "./Card";

describe("Card", () => {
  it("renders correctly", () => {
    const props = {}; //
    const rendered = create(<Card {...props}>test name</Card>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
