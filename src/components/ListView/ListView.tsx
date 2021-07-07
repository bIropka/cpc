import { useQuery } from '@apollo/client';
import { Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Accounts, AccountsVariables } from '../../generated/Accounts';
import { GET_ACCOUNTS } from '../../queries';

import './ListView.css';
import config from './config.json';
import { useListViewStyles, headerStyles } from './ListView.styles';
import { mapSourcesToObject, getRowValue } from './ListView.utils';

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

const pageSize = 14;

const ListView: React.FC = () => {
  const { t, i18n } = useTranslation();
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
        headerName: t((col.labelKey || col.id) as string),
        flex: 1,
        sortable: true,
        valueGetter: (params: any) =>
          getCellValue(col, params.row, t)[col.type],
        renderCell: (params: GridCellParams) =>
          renderCell(col, params.row, t)[col.type]
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
   * Cange language
   */
  const handleChange = (e: any) => i18n.changeLanguage(e.target.value);

  return (
    <div className="list-view-wrapper">
      <div
        className="list-view-wrapper__list-view-header list-view-header"
        style={headerStyles}
      >
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
      </div>
    </div>
  );
};

// export default withTranslation()(ListView);
export default ListView;
