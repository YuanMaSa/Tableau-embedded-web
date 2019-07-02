import React from 'react'
import TableauReport from "tableau-react";

// const options = {
//   height: 100,
//   width: 100
// };

const TableauView = props => {
    return (
      <TableauReport
        url="https://10ay.online.tableau.com/t/jonathandashboard/views/0630-new/5?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link"
        // query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
      />
    );
}
export default TableauView;
