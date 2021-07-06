import { useQuery } from '@apollo/client';
import { Chip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { Link } from 'react-router-dom';

import { Accounts, AccountsVariables } from '../../generated/Accounts';
import { GET_ACCOUNTS } from '../../queries';

import config from './config.json';
import useListViewStyles from './ListView.styles';
import { mapSourcesToObject } from './ListView.utils';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const renderCell = (col: any, row: any): any => {
  return {
    LINK: <Link to={'#'}>{row['Name']}</Link>,
    CHIP: <Chip label={mapSourcesToObject(row, col.modelDataSource)} />,
    MONEY: formatter.format(Number(mapSourcesToObject(row, col.sourceNames))),
    CALC: formatter.format(Number(mapSourcesToObject(row, col.modelDataSource)))
  };
};

const getCellValue = (col: any, row: any): any => {
  return {
    TEXT: mapSourcesToObject(row, col.sourceNames),
    MONEY: Number(mapSourcesToObject(row, col.sourceNames)),
    CHIP: mapSourcesToObject(row, col.modelDataSource),
    TERM: '—',
    CALC: Number(mapSourcesToObject(row, col.modelDataSource))
  };
};

const pageSize = 14;

const ListView: React.FC = () => {
  const cx = useListViewStyles();

  const { loading, data, fetchMore } = useQuery<Accounts, AccountsVariables>(
    GET_ACCOUNTS,
    {
      variables: { pageSize }
    }
  );

  const nodes = data?.accounts?.edges?.map((edge) => edge?.node);
  const pageInfo = data?.accounts?.pageInfo;

  /**
   * Columns
   */
  const columns = React.useMemo(() => {
    return [
      ...config.columnProperties.map((col) => ({
        field: col.id,
        headerName: col.labelKey,
        flex: 1,
        sortable: true,
        valueGetter: (params: any) => getCellValue(col, params.row)[col.type],
        renderCell: (params: GridCellParams) =>
          renderCell(col, params.row)[col.type]
      })),
      {
        field: 'actions',
        headerName: ' ',
        sortable: false,
        // eslint-disable-next-line react/display-name
        renderCell: () => (
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        )
      }
    ];
  }, []);

  /**
   * Rows
   */
  const rows = React.useMemo(() => {
    return nodes?.map((node) => {
      return {
        id: node?.Id,
        ...node
      };
    });
  }, [nodes]);

  return (
    <DataGrid
      classes={{ root: cx.root }}
      columns={columns}
      rows={rows || []}
      loading={loading}
      autoHeight
      disableColumnMenu={true}
      paginationMode="server"
      rowCount={1000}
      pageSize={pageSize}
      onPageChange={() =>
        fetchMore({
          variables: {
            cursor: pageInfo?.endCursor
          }
        })
      }
    />
  );
};

export default ListView;
