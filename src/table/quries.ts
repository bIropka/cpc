import {gql} from '@apollo/client';

export const getAccountsQuery = (pageSize: number) => gql`
query {
  accounts(pageSize: ${pageSize}) {
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
  }
}
`;