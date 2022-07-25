import React from "react";
import { storiesOf } from "@storybook/react";
import NavFooter from "./navFooter";

var data = [
  { text: "About us", href: "about", varient: "secondary" },
  { text: "Help Centre", href: "help", varient: "secondary" },
  { text: "Contacts", href: "contacts", varient: "secondary" },
  { text: "Terms", href: "terms", varient: "secondary" },
  { text: "Privacy Policy", href: "policy", varient: "secondary" },
  { text: "Cookies", href: "cookies", varient: "secondary" },
];
storiesOf("Navfooter", module).add("Primary", () => <NavFooter props={data} />);
