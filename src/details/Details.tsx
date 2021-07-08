import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionDetails, AccordionSummary, Badge, Button, Grid, makeStyles } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';

import DetailsCellLabel from './DetailsCellLabel';

import { Cell, Content, Detail, details, DetailSection } from './details-data';
import './Details.css';
import DetailsSection from './DetailsSection';
import DetailsCell from './DetailsCell';

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
  },
  accordionHeader: {
    padding: '5px 0 0'
  },
  accordionBody: {
    padding: '0 16px 16px'
  },
  pencilIcon: {
    margin: 12
  }
}));

const Details = (props: { id: number }) => {

  const classes = useStyles();

  const data: Detail = useMemo(() => details[props.id - 1], [props.id]);

  const accauntData: Cell[] = [
    {
      id: 1,
      content: [
        {
          type: Content.label,
          text: 'account number'
        },
        {
          type: Content.text,
          text: data.accountNumber
        }
      ]
    },
    {
      id: 2,
      content: [
        {
          type: Content.label,
          text: 'crm account id'
        },
        {
          type: Content.link,
          text: data.crmAccountId,
          url: data.crmAccountURL
        }
      ]
    },
    {
      id: 3,
      content: [
        {
          type: Content.label,
          text: 'created by'
        },
        {
          type: Content.link,
          text: data.createdBy,
          url: data.createdByURL
        }
      ]
    },
    {
      id: 4,
      content: [
        {
          type: Content.label,
          text: 'key contact'
        },
        {
          type: Content.link,
          text: data.keyContact,
          url: data.keyContactURL
        }
      ]
    }
  ];

  const sectionsData: DetailSection[] = [
    {
      id: 1,
      top: true,
      columns: 3,
      cell: [
        {
          id: 1,
          content: [
            {
              type: Content.label,
              text: `account balance`
            },
            {
              type: Content.text,
              text: `$${data.accountBalance} USD`
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              type: Content.label,
              text: 'total invoice balance'
            },
            {
              type: Content.text,
              text: `$${data.totalInvoiceBalance}`
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              type: Content.label,
              text: 'unapplied payment amount'
            },
            {
              type: Content.text,
              text: `$${data.unappliedPaymentAmount}`
            }
          ]
        },
        {
          id: 4,
          content: [
            {
              type: Content.label,
              text: 'contracted mrr'
            },
            {
              type: Content.text,
              text: `$${data.contractedMrr}`
            }
          ]
        },
        {
          id: 5,
          content: [
            {
              type: Content.label,
              text: 'total debit memo balance'
            },
            {
              type: Content.text,
              text: `$${data.totalDebitMemoBalance}`
            }
          ]
        },
        {
          id: 6,
          content: [
            {
              type: Content.label,
              text: 'unapplied credit memo amount'
            },
            {
              type: Content.text,
              text: `$${data.unappliedCreditMemoAmount}`
            }
          ]
        },
        {
          id: 7,
          content: [
            {
              type: Content.label,
              text: 'today`s mrr'
            },
            {
              type: Content.text,
              text: `$${data.todaysMrr}`
            }
          ]
        },
        {
          id: 8,
          content: [
            {
              type: Content.label,
              text: 'credit balance'
            },
            {
              type: Content.text,
              text: `$${data.creditBalance}`
            }
          ]
        },
        {
          id: 9,
          content: [
            {
              type: Content.label,
              text: 'last invoiced'
            },
            {
              type: Content.text,
              text: `$${data.lastInvoiced}`
            }
          ]
        },
      ]
    },
    {
      id: 2,
      top: false,
      columns: 3,
      cell: [
        {
          id: 1,
          content: [
            {
              type: Content.label,
              text: `contact information`
            },
            {
              type: Content.link,
              text: 'add new contact',
              url: 'https://google.com'
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              type: Content.label,
              text: 'contact #1 / bill to'
            },
            {
              type: Content.text,
              text: data.contact_1_name
            },
            ...data.contact_1.list
          ]
        },
        {
          id: 3,
          content: [
            {
              type: Content.label,
              text: 'address'
            },
            ...data.address_1.map(item => {
              return {
                type: Content.text,
                text: item
              }
            })
          ]
        },
        {
          id: 4,
          content: [
            {
              type: Content.label,
              text: 'sold to'
            },
            {
              type: Content.text,
              text: data.soldTo
            }
          ]
        },
        {
          id: 5,
          content: [
            {
              type: Content.label,
              text: 'contact #2'
            },
            {
              type: Content.text,
              text: data.contact_2_name
            },
            ...data.contact_2.list
          ]
        },
        {
          id: 6,
          content: [
            {
              type: Content.label,
              text: 'address'
            },
            ...data.address_1.map(item => {
              return {
                type: Content.text,
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
      columns: 3,
      cell: [
        {
          id: 1,
          content: [
            {
              type: Content.label,
              text: 'company details'
            },
            {
              type: Content.link,
              text: 'add new contact',
              url: 'https://google.com'
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              type: Content.label,
              text: 'sector'
            },
            {
              type: Content.text,
              text: data.sector
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              type: Content.label,
              text: 'sales channel'
            },
            {
              type: Content.text,
              text: data.salesChannel
            }
          ]
        },
        {
          id: 4,
          content: [
            {
              type: Content.label,
              text: 'sales franchise'
            },
            {
              type: Content.text,
              text: data.salesFranchise
            }
          ]
        },
        {
          id: 5,
          content: [
            {
              type: Content.label,
              text: 'vertical'
            },
            {
              type: Content.text,
              text: data.vertical
            }
          ]
        },
        {
          id: 6,
          content: [
            {
              type: Content.label,
              text: 'business divisions'
            },
            {
              type: Content.text,
              text: data.businessDivisions
            }
          ]
        },
        {
          id: 7,
          content: [
            {
              type: Content.label,
              text: 'territory'
            },
            {
              type: Content.text,
              text: data.territory
            }
          ]
        },
        {
          id: 8,
          content: [
            {
              type: Content.label,
              text: 'se use case'
            },
            {
              type: Content.text,
              text: data.seUseCase
            }
          ]
        },
        {
          id: 9,
          content: [
            {
              type: Content.label,
              text: 'account profile'
            },
            {
              type: Content.text,
              text: data.accountProfile
            }
          ]
        },
        {
          id: 10,
          content: [
            {
              type: Content.label,
              text: 'account structure'
            },
            {
              type: Content.text,
              text: data.accountStructure
            }
          ]
        },
        {
          id: 11,
          content: [
            {
              type: Content.label,
              text: 'in collections'
            },
            {
              type: Content.text,
              text: data.inCollections
            }
          ]
        },
        {
          id: 12,
          content: [
            {
              type: Content.label,
              text: 'segment'
            },
            {
              type: Content.text,
              text: data.segment
            }
          ]
        },
        {
          id: 13,
          content: [
            {
              type: Content.label,
              text: 'corporate region'
            },
            {
              type: Content.text,
              text: data.corporateRegion
            }
          ]
        }
      ]
    },
    {
      id: 4,
      top: false,
      columns: 3,
      cell: [
        {
          id: 1,
          content: [
            {
              type: Content.label,
              text: 'zuora represetatives'
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              type: Content.label,
              text: 'sales'
            },
            {
              type: Content.link,
              text: data.sales,
              url: data.salesUrl
            }
          ]
        },
        {
          id: 3,
          content: [
            {
              type: Content.label,
              text: 'customer service'
            },
            {
              type: Content.link,
              text: data.customerService,
              url: data.customerService
            }
          ]
        },
        {
          id: 4,
          content: [
            {
              type: Content.label,
              text: 'collections'
            },
            {
              type: Content.link,
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
          id: 1,
          content: [
            {
              type: Content.label,
              text: 'notes'
            }
          ]
        },
        {
          id: 2,
          content: [
            {
              type: Content.text,
              text: data.notes
            }
          ]
        }
      ]
    }
  ];

  const accordionHeader = accauntData.slice(1).map((data, index) => {
    return (
      <Grid key={data.id} item xs={4}>
        <DetailsCell cell={data} />
      </Grid>
    );
  });

  const sections = sectionsData.map(data => {
    return <DetailsSection key={data.id} data={data} />;
  });

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
            id='general-header'>
            <Grid container className={classes.accordionHeader}>
              <Grid item xs={12} sm={3}>
                <DetailsCell cell={accauntData[0]} />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container>
                  { accordionHeader }
                </Grid>
              </Grid>
            </Grid>
            <CreateIcon className={classes.pencilIcon} />
          </AccordionSummary>
          <AccordionDetails className={classes.accordionBody}>
            <Grid container direction="column">
              {sections}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Details;