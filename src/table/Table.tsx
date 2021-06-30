import React, {useMemo} from 'react';
import {DataGrid, GridCellParams} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import './Table.css';
// @ts-ignore
const Table = (props) => {
    const {data: rows} = props;
    const columns = useMemo(() => ([
        {
            field: 'customerName',
            headerName: 'CUSTOMER NAME',
            flex: 0.236,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
            align: 'left' as const,
            headerAlign: 'left' as const,
        },
        {
            field: 'parentCompany',
            headerName: 'PARENT COMPANY',
            flex: 0.181,
            sortable: false,
            align: 'left' as const,
            headerAlign: 'left' as const,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
        },
        {
            field: 'billTo',
            headerName: 'BILL TO',
            flex: 0.122,
            sortable: false,
            align: 'left' as const,
            headerAlign: 'left' as const,
            leftEmptyWidth: 15,
            rightEmptyWidth: 10,
            renderCell: (params: GridCellParams) => (
                <Link to={`/${params.row.id}`}>{params.value}</Link>
            ),
        },
        {
            field: 'accountBalance',
            headerName: 'ACCOUNT BALANCE (USD)',
            flex: 0.099,
            sortable: false,
            align: 'left' as const,
            headerAlign: 'right' as const,
            // @ts-ignore
            valueFormatter: (params) => new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(params.value),
        },
        {
            field: 'lastInvoice',
            headerName: 'LAST INVOICE',
            flex: 0.07,
            sortable: false,
            align: 'left' as const,
            headerAlign: 'right' as const,
        },
        {
            field: 'status',
            headerName: 'STATUS',
            flex: 0.076,
            sortable: false,
            align: 'left' as const,
            headerAlign: 'left' as const,
            renderCell: (params: GridCellParams) => (
                <Chip label={params.value} color={"default"}/>
            ),
        },
        {
            field: 'buttons',
            headerName: ' ',
            flex: 0.038,
            sortable: false,
            editable: false,
            clickable: false,
            align: 'left' as const,
            headerAlign: 'left' as const,
            renderCell: (params: GridCellParams) => (
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ]), []);

    return (
        <div className="Grid-wrapper">
            <div className="Grid">
                <DataGrid autoHeight rows={rows} columns={columns} disableColumnMenu={true} hideFooter={true}  />
            </div>
        </div>
    );
}

export default Table;
