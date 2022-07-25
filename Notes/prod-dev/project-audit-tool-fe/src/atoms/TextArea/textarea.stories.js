import React from "react";
import { storiesOf } from "@storybook/react";

import Comment from "./text-area";

storiesOf("Textarea", module).add("Comment", () => (
  <Comment
    type="text"
    className="comment-box"
    onChange={() => {
      console.log("Onchange Event");
    }}
    placeholder="Write a Comment..."
    rows="4"
    col="50"
  />
));
