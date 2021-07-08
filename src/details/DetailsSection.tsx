import React from 'react';
import { Grid } from '@material-ui/core';
import DetailsCell from './DetailsCell';
import { DetailSection } from './details-data';

const DetailsSection = (props: { data: DetailSection}) => {

  const cells = props.data.cell.slice(1).map(cellData => {
    return (
      <Grid key={cellData.id} item xs={12} md={6} lg={4}>
        <DetailsCell cell={cellData} />
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DetailsCell cell={props.data.cell[0]} />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <Grid container>
          {cells}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
