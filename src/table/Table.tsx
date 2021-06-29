import React, {useMemo} from 'react';
import {DataGrid, GridCellParams} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import './Table.css';
// @ts-ignore
const Table = (props) => {
    const {data: rows} = props;
    const columns = useMemo(() => ([
        {
            field: 'customerName', headerName: 'CUSTOMER NAME', width: 300,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
        },
        {
            field: 'parentCompany', headerName: 'PARENT COMPANY', width: 250,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
        },
        {
            field: 'billTo', headerName: 'BILL TO', width: 150,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
        },
        {
            field: 'accountBalance', headerName: 'ACCOUNT BALANCE (USD)', width: 200, sortable: false,
            // @ts-ignore
            valueFormatter: (params) => new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(params.value),
        },
        {field: 'lastInvoice', headerName: 'LAST INVOICE', width: 150, sortable: false},
        {field: 'status', headerName: 'STATUS', width: 150, sortable: false},
    ]), []);

    return (
        <div className="Grid-wrapper">
            <div className="Grid">
                <DataGrid rows={rows} columns={columns} hideFooterPagination={true}/>
            </div>
        </div>
    );
}

export default Table;
