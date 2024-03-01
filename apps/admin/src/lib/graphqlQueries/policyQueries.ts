export const GET_ALL_ORDERS = /* GraphQL */ `
  query GetAllPolicy($getAllPolicyInput: GetAllPolicyInput) {
    getAllPolicy(getAllPolicyInput: $getAllPolicyInput) {
      data {
        policyList {
          id
          policyNumber
          type
          cedant {
            name
            address
          }
          reinsurers {
            name
            share
          }
          coverage {
            subjectOfInsurance
            location
            limit
          }
          premium
          status
          startDate
          endDate
          createdAt
          updatedAt
        }
        nextCursor {
          id
        }
      }
      message
      success
      statusCode
    }
  }
`;
