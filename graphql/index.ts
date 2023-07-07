
//   export const getProjectByIdQuery = `
//   query GetProjectById($id: ID!) {
//     project(by: { id: $id }) {
//       id
//       title
//       description
//       image
//       liveSiteUrl
//       githubUrl
//       category
//       createdBy {
//         id
//         name
//         email
//         avatarUrl
//       }
//     }
//   }
// `;
export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl  
				linkedInUrl
				id
			}
		}
	}
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
  }
`;