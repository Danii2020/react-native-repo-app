import ApolloClient from "apollo-boost";

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.100.16:4000/graphql'
  })
}

export default createApolloClient;