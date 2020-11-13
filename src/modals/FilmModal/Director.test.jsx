import { create } from "react-test-renderer";
import Director from "./Director";

describe("FilmModal/Director", () => {
  it("renders correctly", () => {
    const rendered = create(<Director>test name</Director>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
