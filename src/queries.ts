import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query Accounts($pageSize: Int!, $cursor: String) {
    accounts(pageSize: $pageSize, cursor: $cursor) {
      edges {
        node {
          Id
          Name
          Balance
          Currency
          Mrr
          LastInvoiceDate
          Status
          Parent {
            Name
            Id
          }
          BillTo {
            FirstName
            LastName
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
