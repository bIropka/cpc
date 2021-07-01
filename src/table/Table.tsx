import React, {useMemo} from 'react';
import {DataGrid, GridCellParams} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
                    <DeleteIcon/>
                </IconButton>
            ),
        },
    ]), []);

    return (
        <div className="grid-wrapper">
            <div className="grid-wrapper__grid-header grid-header">
                <div className='grid-header__info-block header-info-block'>
                    <Avatar>
                        <svg className="MuiSvgIcon-root MuiAvatar-fallback" focusable="false" viewBox="0 0 24 24"
                             aria-hidden="true">
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                    </Avatar>
                    <span className='header-info-block__header-title'>{'Customer Accounts'}</span>
                </div>
                <div className='grid-header__functional-block header-functional-block'>
                    <Button variant="outlined"
                            color="primary"
                            size="small"
                            endIcon={<ArrowDropDownIcon />}
                            className="header-functional-block__button-spacing">
                        {'IMPORT ACCOUNTS'}
                    </Button>
                    <Button variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<AddIcon />}>
                        {'CREATE NEW ACCOUNT'}
                    </Button>
                </div>
            </div>
            <div className="grid-wrapper__grid grid">
                <DataGrid autoHeight rows={rows} columns={columns} disableColumnMenu={true} hideFooter={true}/>
            </div>
        </div>
    );
}

export default Table;
