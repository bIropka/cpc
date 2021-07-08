import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '0px 0px 5px',
    fontSize: 12,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, .5)',
    textTransform: 'uppercase'
  }
}));

const DetailsCellLabel = (props: { text: string | undefined }) => {

  const classes = useStyles();
  const { text } = { ...props };

  return (
    <span className={classes.title}>{typeof text === 'undefined' ? '' : text}</span>
  );

};

export default DetailsCellLabel;
