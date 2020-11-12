import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import { SUB_CONTAINER_ID } from "./constants";

export const diverForTestFile = new Driver({
  allowClose: false,
  padding: 40,
  animate: false,
});

export const highlightSubContainer = () => {
  diverForTestFile.highlight({
    element: `#subContainer-button`,
    popover: {
      title: "redBlock",
      description: "description",
    },
  });
};

export const resetDriver = () => {
  if (diverForTestFile.hasHighlightedElement()) {
    diverForTestFile.reset();
  }
};
