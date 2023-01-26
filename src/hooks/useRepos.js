import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_REPOS } from "../graphql/queries";

const useRepos = () => {
  const { data={}, loading, refetch } = useLazyQuery(GET_REPOS, {
    fetchPolicy: 'standby'
  })
  const { repos=null } = data

  const reposNodes = repos
    ? repos.edges.map(edge => edge.node)
    : []

  return { loading, repos: reposNodes, refetch }
}

export default useRepos;