import { create } from "react-test-renderer";
import Episode from "./Episode";

describe("FilmModal/Episode", () => {
  it("renders correctly", () => {
    const rendered = create(<Episode>1</Episode>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
