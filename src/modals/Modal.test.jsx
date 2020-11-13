import { create } from "react-test-renderer";
import Modal from "./Modal";

describe("FilmModal/Actors", () => {
  it("renders correctly", () => {
    const customComponent = (
      <div>
        <span>span1</span>
        <span>span2</span>
      </div>
    );
    const rendered = create(
      <Modal open={false} onClose={() => null}>
        {customComponent}
      </Modal>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
