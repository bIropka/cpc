import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Link from '@material-ui/icons/Link';
import React from 'react';

import config from './config.json';

type IConfig = {
  component: string;
  labelKey: string;
};

const KeysToComponentMap = {
  button: Button,
  link: Link
};

const KeysToPropsMap = {
  button: {
    variant: 'contained',
    color: 'secondary',
    startIcon: <CloudUploadIcon />
  }
};

const renderer = (config: IConfig, index: number) => {
  if (typeof KeysToComponentMap[config.component] !== 'undefined') {
    return React.createElement(
      KeysToComponentMap[config.component],
      { ...KeysToPropsMap[config.component], key: index },
      config.labelKey
    );
  }
};

const ListViewToolbar: React.FC = () => {
  return (
    <Toolbar style={{ justifyContent: 'flex-end' }}>
      {config.tableActions.map(renderer)}
    </Toolbar>
  );
};

export default ListViewToolbar;
