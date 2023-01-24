import { useEffect, useState } from "react";

const useRepos = () => {
  const [repos, setRepos] = useState(null)

  const fetchRepos = async () => {
    const response = await globalThis.fetch('http://192.168.100.16:5000/api/repositories/')
    const json = await response.json()
    setRepos(json)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  const reposNodes = repos
    ? repos.edges.map(edge => edge.node)
    : []

  return {repos: reposNodes}
}

export default useRepos;