import { create } from "react-test-renderer";
import ReleaseDate from "./ReleaseDate";

describe("FilmModal/ReleaseDate", () => {
  it("renders correctly", () => {
    const rendered = create(<ReleaseDate>2020:11:05</ReleaseDate>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
