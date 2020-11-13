import { create } from "react-test-renderer";
import Opening from "./Opening";

describe("FilmModal/Opening", () => {
  it("renders correctly", () => {
    const rendered = create(<Opening>text text text</Opening>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
