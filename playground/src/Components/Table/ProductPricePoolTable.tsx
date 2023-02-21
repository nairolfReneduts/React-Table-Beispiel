import React, { useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { ProductPricePool } from '../../Models/ProductPricePool';

interface ProductPoolTableProps{
data: ProductPricePool[];
}



const ProductPricePoolTable = (props: ProductPoolTableProps) => {

  console.log(props);
    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<ProductPricePool>[]>(
      () => [
          
        {
          accessorKey: 'Name', 
          header: 'Name',
        },
        {
          accessorKey: 'CreatedDate',
          header: 'Erstellt am',
        },
        {
          accessorKey: 'LastUpdatedDate', 
          header: 'Zuletzt geändert am',
        },
        {
            accessorKey: 'Description', 
            header: 'Beschreibung',
          },
        
      ],
      [],
    );
  
    return (
    <div><MaterialReactTable 
    enableDensityToggle={true}
    enableFilterMatchHighlighting={true}
    enableGlobalFilter={true}
    enableGrouping={true}
    enablePagination={false}
    enableRowActions={true}
    enableSelectAll={true}
    enableTopToolbar={true}
    enableHiding= {true}
    editingMode={'table'}
     columns={columns}
      data={props.data}

       /></div>
    );
  };
  
  export default ProductPricePoolTable;