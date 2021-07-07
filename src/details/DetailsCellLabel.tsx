import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '0px 0px 5px',
    fontSize: 12,
    color: 'rgba(0, 0, 0, .5)',
    textTransform: 'uppercase'
  }
}));

const DetailsCellLabel = (props: { text: string }) => {
  const classes = useStyles();
  return (
    <span className={classes.title}>{props.text}</span>
  );
};
export default DetailsCellLabel;
