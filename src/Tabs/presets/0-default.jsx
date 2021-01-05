import * as React from "react";
import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

export default (
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    uxpId="1"
    defaultValue={1}
  >
    <Tab label="Active" uxpId="2" fullWidth />
    <Tab label="Disabled" uxpId="3" fullWidth />
    <Tab label="Active" uxpId="4" fullWidth />
  </Tabs>
);
