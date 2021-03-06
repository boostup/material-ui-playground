import React from "react";
import { FixedSizeList } from "react-window";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import AutoSizer from "react-virtualized-auto-sizer";

import DrawerOption from "./DrawerOption";

import { renderDrawerOption } from "./DrawerOption";

function DrawerContent({ menuOptionsTop, menuOptionsBottom, classes }) {
  return (
    <div className="inner">
      <div className="top-panel">
        {/* The self-closing DIV below so that the menu options have a top margin equal to the height of the toolbar */}
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menuOptionsTop.map(({ label, icon }, index) => (
            <DrawerOption key={index} i={index} label={label} icon={icon} />
          ))}
        </List>
        <Divider />
      </div>
      <div className="bottom-panel">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <FixedSizeList
                height={height}
                width={width}
                itemSize={40}
                itemCount={menuOptionsBottom.length}
                itemData={menuOptionsBottom}
              >
                {renderDrawerOption}
              </FixedSizeList>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default DrawerContent;
