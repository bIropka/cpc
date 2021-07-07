import qs from 'query-string';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ListView from '../components/ListView';

type SearchParams = {
  pageSize: string;
  cursor: string;
  page: string;
};

const Root: React.FC<RouteComponentProps> = ({ location }) => {
  const search = qs.parse<SearchParams>(location.search);

  const page = Number(search.page) || undefined;
  const pageSize = Number(search.pageSize) || undefined;

  return <ListView page={page} pageSize={pageSize} cursor={search.cursor} />;
};

export default Root;
