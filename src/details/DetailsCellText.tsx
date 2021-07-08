import React from 'react';

import { Grid, makeStyles, SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '0px 0px 5px',
    fontSize: 12,
    color: 'rgba(0, 0, 0, .5)',
    textTransform: 'uppercase'
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
    <Grid container alignItems='center'>
      { iconDOM }
      <span className={classes.title}>{typeof text === 'undefined' ? '' : text}</span>
    </Grid>
  );

};

export default DetailsCellText;