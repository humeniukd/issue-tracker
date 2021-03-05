import { useState, useEffect } from 'react'
import { fetchIssues } from './api'

export const useIssues = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [issues, setIssues] = useState([])
  const [error, setError] = useState()

  async function fetch() {
    try {
      const { data } = await fetchIssues()
      setIssues(data)
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetch()
  }, [])
  return [isLoading, issues, error]
}
