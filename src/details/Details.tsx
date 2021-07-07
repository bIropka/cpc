import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Badge,
  Grid,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import DetailsCell from './DetailsCell';
import DetailsCellLabel from './DetailsCellLabel';

import { Detail, details } from './details-data';
import './Details.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'fit-content',
    padding: '20px 20px 20px 15%'
  },
  details: {
    padding: '20px',
    backgroundColor: 'snow',
    border: '1px solid #777'
  },
  headerColumn: {
    width: 'auto',
    padding: '10px 20px'
  },
  headerButtonBack: {
    margin: '0px 20px 0px 0px',
    color: 'rgba(0, 0, 0, .5)'
  },
  headerButton: {
    margin: '0px 20px 0 10px'
  },
  accordion: {
    backgroundColor: '#fff',
    width: '100%'
  },
  title: {
    margin: '0px 30px 0px 0px',
    fontWeight: 500
  }
}));

const Details = (props: { id: number }) => {
  const classes = useStyles();
  const data: Detail = useMemo(() => details[props.id - 1], [props.id]);
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.details}>
        <Grid container justify='space-between' alignItems='center' wrap='nowrap'>
          <Grid container wrap='nowrap' alignItems='center' className={classes.headerColumn}>
            <Link to={'/'}><ChevronLeftIcon className={classes.headerButtonBack} /></Link>
            <Grid container direction='column'>
              <DetailsCellLabel text='customer' />
              <Badge badgeContent='ACTIVE' color='primary'>
                <h3 className={classes.title}>{data.customerName}</h3>
              </Badge>
            </Grid>
          </Grid>
          <Grid container alignItems='center' className={classes.headerColumn}>
            <Button variant='outlined' color='primary'>Process a payment</Button>
            <Button variant='contained' color='primary' className={classes.headerButton}>Create new order</Button>
            <MoreVertIcon />
          </Grid>
        </Grid>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id='general-header'>Hello</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify='center' spacing={0}>
                  <Grid item>
                    <DetailsCell title={'Contact Information'} value={'Add new contact'} />
                  </Grid>
                  <Grid item>
                    <DetailsCell title={'CONTACT # 1 / BILL TO'} value={data.contact_1.name}
                                 list={data.contact_1.list} />
                    <DetailsCell title={'CONTACT # 2'} value={data.contact_2.name} list={data.contact_2.list} />
                  </Grid>
                  <Grid item>
                    <DetailsCell title={'ADDRESS'} value={data.address_1} />
                    <DetailsCell title={'ADDRESS'} value={data.address_2} />
                  </Grid>
                  <Grid item>
                    <DetailsCell title={'SOLD TO'} value={data.soldTo} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Details;