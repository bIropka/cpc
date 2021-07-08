import React from 'react';
import './Details.css';
import { Cell, CellContent, Content } from './details-data';
import { Grid } from '@material-ui/core';
import DetailsCellLabel from './DetailsCellLabel';
import DetailsCellText from './DetailsCellText';
import DetailsCellLink from './DetailsCellLink';

const DetailsCell = (props: { cell: Cell }) => {

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
    <Grid container direction="column">
      { content }
    </Grid>
  );
};

export default DetailsCell;