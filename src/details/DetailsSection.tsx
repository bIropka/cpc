import React from 'react';
import { Grid } from '@material-ui/core';
import DetailsCell from './DetailsCell';
import { Detail } from './details-data';

const DetailsSection = (props: { data: Detail}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DetailsCell title={'Contact Information'} value={'Add new contact'} />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsCell title={'CONTACT # 1 / BILL TO'}
                         value={props.data.contact_1.name}
                         list={props.data.contact_1.list} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsCell title={'ADDRESS'} value={props.data.address_1} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsCell title={'SOLD TO'} value={props.data.soldTo} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsCell title={'CONTACT # 2'} value={props.data.contact_2.name} list={props.data.contact_2.list} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailsCell title={'ADDRESS'} value={props.data.address_2} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
