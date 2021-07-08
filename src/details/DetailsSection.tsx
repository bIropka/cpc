import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import DetailsCell from './DetailsCell';
import { DetailSection } from './details-data';
import getColumnsNumber from './utils';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '15px 84px 15px 0',
    borderTop: '1px solid lightgrey'
  }
}));

const DetailsSection = (props: { data: DetailSection }) => {

  const classes = useStyles();

  const cells = props.data.cell.slice(1).map(cellData => {
    return (
      <Grid key={cellData.id}
            item xs={12}
            sm={getColumnsNumber(props.data.columns)}>
        <DetailsCell cell={cellData} />
      </Grid>
    );
  });

  return (
    <Grid container
          className={classes.section}>
      <Grid item xs={12} sm={3}>
        <DetailsCell cell={props.data.cell[0]} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container>
          {cells}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
