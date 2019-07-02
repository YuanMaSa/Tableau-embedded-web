import React, { Component } from "react";
import Tableau from "tableau-api";

export default class TableauDashboard extends Component {
  initTableau() {
    const vizUrl =
      "https://10ay.online.tableau.com/t/jonathandashboard/views/dash/2?iframeSizedToWindow=true&:embed=y&:device=phone&:showAppBanner=false&:devicepreviewmode=true&:display_count=no&:showVizHome=no&:origin=viz_share_link";
    const options = {
      hideTabs: true,
      width: "700px",
      height: "800px",
      onFirstInteractive: () => {
        const sheet = viz
          .getWorkbook()
          .getActiveSheet()
          .getWorksheets()
          .get("Table");
        const options = {
          ignoreAliases: false,
          ignoreSelection: false,
          includeAllColumns: false
        };
        sheet.getUnderlyingDataAsync(options).then(t => {
          const tableauData = t.getData();
          let data = [];
          const pointCount = tableauData.length;
          for (let a = 0; a < pointCount; a++) {
            data = data.concat({
              x: tableauData[a][0].value,
              y: Math.round(tableauData[a][3].value, 2)
            });
          }
        });
      }
    };
    const vizContainer = this.vizContainer;
    let viz = new Tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div
        ref={div => {
          this.vizContainer = div;
        }}
        style={{
          position: "absolute",
          left: -275,
          top: -375
        }}
      />
    );
  }
  componentDidMount() {
    this.initTableau();
  }
}
