import { renderHook } from "@testing-library/react-hooks";
import { useDebounce } from "./useDebounce";

describe("useMyName tests", () => {
  it("verifies that it renders with no initial value", () => {
    const { result } = renderHook(() => useDebounce(undefined, 10));
    expect(result.current).toBe(undefined);
  });

  it("verifies that it renders with initial value", () => {
    const { result } = renderHook(() => useDebounce("Larry", 10));
    expect(result.current).toBe("Larry");
  });
});
