import { useQuery } from '@apollo/client';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  DataGrid,
  GridCellParams,
  GridPageChangeParams,
  GridValueGetterParams
} from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import qs from 'query-string';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import { Accounts, AccountsVariables } from '../../generated/Accounts';
import { GET_ACCOUNTS } from '../../queries';

import config from './config.json';
import { mapSourcesToObject, getRowValue } from './ListView.utils';
import ListViewToolbar from './ListViewToolbar';
import './ListView.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const renderCell = (col: any, row: any, t: any): any => {
  return {
    LINK: <Link to={'#'}>{row['Name']}</Link>,
    CHIP: <Chip label={t(getRowValue(row, col.modelDataSource))} />,
    MONEY: formatter.format(Number(mapSourcesToObject(row, col.sourceNames))),
    CALC: formatter.format(Number(mapSourcesToObject(row, col.modelDataSource)))
  };
};

const getCellValue = (col: any, row: any, t: any): any => {
  return {
    TEXT: mapSourcesToObject(row, col.sourceNames),
    MONEY: Number(mapSourcesToObject(row, col.sourceNames)),
    CHIP: t(getRowValue(row, col.modelDataSource)),
    TERM: '—',
    CALC: Number(mapSourcesToObject(row, col.modelDataSource))
  };
};

type Props = {
  page?: number;
  pageSize?: number;
  cursor?: string;
};

const ListView: React.FC<Props> = ({
  page,
  pageSize = config.pageSize,
  cursor
}) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const { loading, data, fetchMore } = useQuery<Accounts, AccountsVariables>(
    GET_ACCOUNTS,
    {
      variables: { pageSize, cursor }
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
        headerName: t((col.labelKey || col.id) as string),
        flex: 1,
        sortable: true,
        valueGetter: (params: GridValueGetterParams) =>
          getCellValue(col, params.row, t)[col.type],
        renderCell: (params: GridCellParams) =>
          renderCell(col, params.row, t)[col.type]
      })),
      {
        field: 'actions',
        headerName: ' ',
        sortable: false,
        renderCell: () => (
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        )
      }
    ];
  }, [i18n.language]);

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
  }, [nodes, i18n.language]);

  /**
   * Change language
   */
  const handleChange = (e: any) => i18n.changeLanguage(e.target.value);

  const handlePageChange = React.useCallback(
    (param: GridPageChangeParams) => {
      fetchMore({
        variables: {
          pageSize: param.pageSize,
          cursor: pageInfo?.endCursor
        }
      });

      history.push({
        search: qs.stringify({
          pageSize,
          cursor: pageInfo?.endCursor,
          ...(!!param.page && { page: param.page })
        })
      });
    },
    [pageSize, pageInfo?.endCursor]
  );

  return (
    <div className="list-view-wrapper">
      <div className="list-view-wrapper__list-view-header list-view-header">
        <div className="list-view-header__info-block header-info-block">
          <Avatar>
            <svg
              className="MuiSvgIcon-root MuiAvatar-fallback"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </Avatar>

          <span className="header-info-block__header-title">
            {t('customerAccounts')}
          </span>
        </div>

        <div className="list-view-header__functional-block header-functional-block">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            endIcon={<ArrowDropDownIcon />}
          >
            {t('importAccounts')}
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            className="header-functional-block__button-spacing"
          >
            {t('createNewAccount')}
          </Button>

          <Select
            className="header-functional-block__dropdown"
            value={localStorage.getItem('i18nextLng')}
            onChange={handleChange}
          >
            <MenuItem value={'en'}>{t('english')}</MenuItem>
            <MenuItem value={'ru'}>{t('russian')}</MenuItem>
          </Select>
        </div>
      </div>

      <div className="list-view-wrapper__list-view list-view">
        <ListViewToolbar />

        <DataGrid
          columns={columns}
          rows={rows || []}
          loading={loading}
          rowCount={1000}
          page={page || 0}
          pageSize={pageSize}
          rowsPerPageOptions={[]}
          autoHeight
          disableColumnMenu={true}
          paginationMode="server"
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListView;
