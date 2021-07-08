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
  }
}));

const DetailsCellLink = (
  props: {
    text: string | undefined,
    url: string | undefined,
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | undefined
  }) => {

  const classes = useStyles();
  const { text, url, icon } = { ...props };

  const iconDOM = typeof icon === 'undefined' ? null : <SvgIcon component={icon} className={classes.icon} />;
  const link = <a className={classes.link} href={url}>{text}</a>;

  return (
    <Grid container alignItems='center' className={classes.root}>
      { iconDOM }
      { link }
    </Grid>
  );

};

export default DetailsCellLink;