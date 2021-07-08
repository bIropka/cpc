import React from 'react';

import { Grid, makeStyles, SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 0 5px'
  },
  link: {
    fontSize: 12,
    color: 'dodgerblue',
    textDecoration: 'none'
  },
  icon: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, .5)',
    margin: '0 10px 0 0'
  },
  text: {
    fontSize: 16,
    color: '#000',
  }
}));

const DetailsCellText = (

  props: {
    text: string | undefined,
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | undefined }) => {

  const classes = useStyles();
  const { text, icon } = { ...props };

  const iconDOM = typeof icon === 'undefined' ? null : <SvgIcon component={icon} />;

  return (
    <Grid container alignItems='center' className={classes.root}>
      { iconDOM }
      <span className={classes.text}>{typeof text === 'undefined' ? '-' : text}</span>
    </Grid>
  );

};

export default DetailsCellText;