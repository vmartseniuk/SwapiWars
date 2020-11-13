import { create } from "react-test-renderer";
import Actors from "./Actors";

describe("FilmModal/Actors", () => {
  it("renders correctly", () => {
    const arrNames = ["name1", "name2"];
    const rendered = create(<Actors character={arrNames} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
