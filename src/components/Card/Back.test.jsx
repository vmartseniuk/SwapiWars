import { create } from "react-test-renderer";
import Back from "./Back";

describe("Card/Back", () => {
  it("renders correctly", () => {
    const props = { opening_crawl: "", episode_id: 1, onClick: () => null };
    const rendered = create(<Back {...props}>test name</Back>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
