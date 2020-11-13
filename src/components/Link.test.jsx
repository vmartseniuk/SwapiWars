import { create } from "react-test-renderer";

import { ExternalLink } from "./Link";

describe("Links", () => {
  it("ExternalLink renders correctly", () => {
    const rendered = create(<ExternalLink to="/">test link</ExternalLink>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
