/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Accounts
// ====================================================

export interface Accounts_accounts_edges_node_Parent {
  __typename: 'account';
  Name: string | null;
  Id: string | null;
}

export interface Accounts_accounts_edges_node_BillTo {
  __typename: 'contact';
  FirstName: string | null;
  LastName: string | null;
}

export interface Accounts_accounts_edges_node {
  __typename: 'account';
  Id: string | null;
  Name: string | null;
  Balance: number | null;
  Currency: string | null;
  Mrr: number | null;
  LastInvoiceDate: string | null;
  Status: string | null;
  Parent: Accounts_accounts_edges_node_Parent | null;
  BillTo: Accounts_accounts_edges_node_BillTo | null;
}

export interface Accounts_accounts_edges {
  __typename: 'accountEdge';
  node: Accounts_accounts_edges_node | null;
}

export interface Accounts_accounts_pageInfo {
  __typename: 'PageInfo';
  endCursor: string | null;
  hasNextPage: boolean | null;
}

export interface Accounts_accounts {
  __typename: 'accountConnection';
  edges: (Accounts_accounts_edges | null)[] | null;
  pageInfo: Accounts_accounts_pageInfo | null;
}

export interface Accounts {
  accounts: Accounts_accounts | null;
}

export interface AccountsVariables {
  pageSize: number;
  cursor?: string | null;
}
