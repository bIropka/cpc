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

const DetailsCellLink = (
  props: {
    text: string | undefined,
    url: string | undefined,
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | undefined
  }) => {

  const classes = useStyles();
  const { text, url, icon } = { ...props };

  const iconDOM = typeof icon === 'undefined' ? null : <SvgIcon component={icon} />;
  const link = <a className={classes.title} href={url}>{text}</a>;

  return (
    <Grid container alignItems='center'>
      { iconDOM }
      { link }
    </Grid>
  );

};

export default DetailsCellLink;