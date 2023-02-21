import React from "react";
import { ProductPricePool } from "../../Models/ProductPricePool";
import { DataService } from "../../Services/DataService";
import Table from "./ProductPricePoolTable";

interface TableProps{

}

export class ProductPricePoolTableContainer extends React.Component {

  data: ProductPricePool[];

    constructor(props: TableProps){
        super(props);
        this.data = [];
        this.data = DataService.getMockData();
        
    }
    render() {
      return(
        <Table data={this.data}></Table>
      );
    }
  }