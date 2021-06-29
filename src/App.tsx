import React, {useMemo} from 'react';
import {DataGrid} from "@material-ui/data-grid";
import './App.css';
import mock from './mock';

const App = () => {
    const rows = useMemo(() => mock, []);
    const columns = useMemo(() => ([
            {field: 'customerName', headerName: 'CUSTOMER NAME', width: 300},
            {field: 'parentCompany', headerName: 'PARENT COMPANY', width: 250, sortable: false},
            {
                field: 'billTo', headerName: 'BILL TO', width: 150, sortable: false,
            },
            {
                field: 'accountBalanceFormat', headerName: 'ACCOUNT BALANCE (USD)', width: 200, sortable: false,
                // @ts-ignore
                valueGetter: (params) => new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(params.getValue(params.id, 'accountBalance')),
            },
            {field: 'lastInvoice', headerName: 'LAST INVOICE', width: 150, sortable: false},
            {field: 'status', headerName: 'STATUS', width: 150, sortable: false},
        ]), []);

    return (
        <div className="App">
            <div className="Grid">
                <DataGrid rows={rows} columns={columns} hideFooterPagination={true}/>
            </div>
        </div>
    );
}

export default App;
