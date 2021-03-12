import React from "react"
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="yoyo" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("yoyo");
    });

    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="yoyo" />);
      const root = component.root;
      let span = root.findByType("span")
      expect(span).not.toBeNull();
    });
    test("status from props should contains correct status", () => {
        const component = create(<ProfileStatus status="yoyo" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("yoyo");
      });

      test("input should be displayed in editMode ", () => {
        const component = create(<ProfileStatus status="yoyo" />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("yoyo");
      });
  });