import React from "react";
import ListItem from "../../molecules/ListItem/ListItem";
import withStyles from "../../withstyle";
import { ProgressListStyle } from "./ProgressList.style";
import Anchor from "../../atoms/Anchor/Anchor";
const ProgressList = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div>
      <ListItem status="complete" text="✓" btnText="REQUIREMENTS VIEWPOINT">
        <Anchor text="System Interface" >System Interface</Anchor>
        <Anchor>Arichitectural Interface</Anchor>
      </ListItem>
      <ListItem status="progress" text="2" btnText="FUNCTIONAL VIEWPOINT">
        <Anchor>System Interface</Anchor>
        <Anchor className="active">Arichitectural Interface</Anchor>
        <Anchor>Understanding Layers</Anchor>
      </ListItem>
      <ListItem status="notstarted" text="3" btnText="OPERATIONAL VIEWPOINT">
        <Anchor>System Interface</Anchor>
        <Anchor>Arichitectural Interface</Anchor>
      </ListItem>
      <ListItem status="notstarted" text="4" btnText="PERFORMANCE VIEWPOINT">
        <Anchor>System Interface</Anchor>
        <Anchor>Arichitectural Interface</Anchor>
      </ListItem>
      <ListItem status="notstarted" text="5" btnText="SECURITY VIEWPOINT">
        <Anchor>System Interface</Anchor>
        <Anchor>Arichitectural Interface</Anchor>
      </ListItem>
      </div>
    </div>
  );
};

export default withStyles(ProgressList, ProgressListStyle);
