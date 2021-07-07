import { makeStyles } from '@material-ui/core';

const listViewStyles = {
  maxWidth: 1280,
  margin: '10px auto'
};

export const headerStyles = {
  ...listViewStyles,
  marginTop: 0,
  marginBottom: 0
};

export const useListViewStyles = makeStyles({
  root: listViewStyles
});
