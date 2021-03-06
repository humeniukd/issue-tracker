import { useState } from 'react'
import { fetchIssues } from './api'

export const useIssues = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [issues, setIssues] = useState([])
  const [error, setError] = useState()

  async function fetch() {
    try {
      setIsLoading(true)
      const { data } = await fetchIssues()
      setIssues(data)
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [isLoading, issues, error, fetch]
}
