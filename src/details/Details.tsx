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

import DetailsCellLabel from './DetailsCellLabel';

import { Detail, details, DetailSection } from './details-data';
import './Details.css';
import DetailsSection from './DetailsSection';

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
  title: {
    margin: '0px 30px 0px 0px',
    fontWeight: 500
  },
  accordion: {
    backgroundColor: '#fff',
    width: '100%'
  }
}));

const Details = (props: { id: number }) => {
  const classes = useStyles();
  const data: Detail = useMemo(() => details[props.id - 1], [props.id]);
  const sectionsData: DetailSection[] = [
    {
      id: 1,
      top: true,
      columns: 4,
      cell: [
        {
          content: [
            {
              type: 'LABEL',
              text: `account number`
            },
            {
              type: 'TEXT',
              text: `$${data.accountBalance} USD`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'total invoice balance'
            },
            {
              type: 'TEXT',
              text: `$${data.totalInvoiceBalance}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'unapplied payment amount'
            },
            {
              type: 'TEXT',
              text: `$${data.unappliedPaymentAmount}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'contracted mrr'
            },
            {
              type: 'TEXT',
              text: `$${data.contractedMrr}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'total debit memo balance'
            },
            {
              type: 'TEXT',
              text: `$${data.totalDebitMemoBalance}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'unapplied credit memo amount'
            },
            {
              type: 'TEXT',
              text: `$${data.unappliedCreditMemoAmount}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'today`s mrr'
            },
            {
              type: 'TEXT',
              text: `$${data.todaysMrr}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'credit balance'
            },
            {
              type: 'TEXT',
              text: `$${data.creditBalance}`
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'last invoiced'
            },
            {
              type: 'TEXT',
              text: `$${data.lastInvoiced}`
            }
          ]
        },
      ]
    },
    {
      id: 2,
      top: false,
      columns: 4,
      cell: [
        {
          content: [
            {
              type: 'LABEL',
              text: `contact information`
            },
            {
              type: 'LINK',
              text: 'add new contact',
              url: 'https://google.com'
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'contact #1 / bill to'
            },
            {
              type: 'TEXT',
              text: data.contact_1_name
            },
            ...data.contact_1.list
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'address'
            },
            ...data.address_1.map(item => {
              return {
                type: 'TEXT',
                text: item
              }
            })
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'sold to'
            },
            {
              type: 'TEXT',
              text: data.soldTo
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'contact #2'
            },
            {
              type: 'TEXT',
              text: data.contact_2_name
            },
            ...data.contact_2.list
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'address'
            },
            ...data.address_1.map(item => {
              return {
                type: 'TEXT',
                text: item
              }
            })
          ]
        }
      ]
    },
    {
      id: 3,
      top: false,
      columns: 4,
      cell: [
        {
          content: [
            {
              type: 'LABEL',
              text: 'company details'
            },
            {
              type: 'LINK',
              text: 'add new contact',
              url: 'https://google.com'
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'sector'
            },
            {
              type: 'TEXT',
              text: data.sector
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'sales channel'
            },
            {
              type: 'TEXT',
              text: data.salesChannel
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'sales franchise'
            },
            {
              type: 'TEXT',
              text: data.salesFranchise
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'vertical'
            },
            {
              type: 'TEXT',
              text: data.vertical
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'business divisions'
            },
            {
              type: 'TEXT',
              text: data.businessDivisions
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'territory'
            },
            {
              type: 'TEXT',
              text: data.territory
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'se use case'
            },
            {
              type: 'TEXT',
              text: data.seUseCase
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'account profile'
            },
            {
              type: 'TEXT',
              text: data.accountProfile
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'account structure'
            },
            {
              type: 'TEXT',
              text: data.accountStructure
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'in collections'
            },
            {
              type: 'TEXT',
              text: data.inCollections
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'segment'
            },
            {
              type: 'TEXT',
              text: data.segment
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'corporate region'
            },
            {
              type: 'TEXT',
              text: data.corporateRegion
            }
          ]
        }
      ]
    },
    {
      id: 4,
      top: false,
      columns: 4,
      cell: [
        {
          content: [
            {
              type: 'LABEL',
              text: 'zuora represetatives'
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'sales'
            },
            {
              type: 'LINK',
              text: data.sales,
              url: data.salesUrl
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'customer service'
            },
            {
              type: 'LINK',
              text: data.customerService,
              url: data.customerService
            }
          ]
        },
        {
          content: [
            {
              type: 'LABEL',
              text: 'collections'
            },
            {
              type: 'LINK',
              text: data.collections,
              url: data.collectionsUrl
            }
          ]
        }
      ]
    },
    {
      id: 5,
      top: false,
      columns: 2,
      cell: [
        {
          content: [
            {
              type: 'LABEL',
              text: 'notes'
            }
          ]
        },
        {
          content: [
            {
              type: 'text',
              text: data.notes
            }
          ]
        }
      ]
    }
  ];
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
            <DetailsSection data={sectionsData} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Details;