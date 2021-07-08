import React from 'react';
import './Details.css';
import { Cell, CellContent, Content } from './details-data';
import { Grid, makeStyles } from '@material-ui/core';
import DetailsCellLabel from './DetailsCellLabel';
import DetailsCellText from './DetailsCellText';
import DetailsCellLink from './DetailsCellLink';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0'
  }
}));

const DetailsCell = (props: { cell: Cell }) => {

  const classes = useStyles();

  const renderLabel = (data: CellContent, index: number) => {
     return <DetailsCellLabel key={index} text={data.text} />
  }

  const renderText = (data: CellContent, index: number) => {
    return <DetailsCellText key={index} text={data.text} icon={data.icon} />
  }

  const renderLink = (data: CellContent, index: number) => {
    return <DetailsCellLink key={index} text={data.text} url={data.url} icon={data.icon} />
  }

  const renderContentItem = (data: CellContent, index: number) => {
    switch(data.type) {
      case Content.label:
        return renderLabel(data, index);
      case Content.text:
        return renderText(data, index);
      case Content.link:
        return renderLink(data, index);
    }
  }

  const content = props.cell.content.map((item, index) => renderContentItem(item, index));

  return (
    <Grid container direction="column"
          className={classes.root}>
      { content }
    </Grid>
  );
};

export default DetailsCell;