import axios from 'axios'
import { useState } from 'react'
import { fetchIssues, patchIssue } from './api'

export const useIssues = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [issues, setIssues] = useState([])

  async function fetch() {
    try {
      setIsLoading(true)
      const { data } = await fetchIssues()
      setIssues(data)
    } finally {
      setIsLoading(false)
    }
  }

  return [isLoading, issues, fetch]
}

export const usePatchIssue = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function patch(id, status) {
    try {
      setIsLoading(true)
      await patchIssue(id, status)
    } finally {
      setIsLoading(false)
    }
  }

  return [isLoading, patch]
}

export const useError = () => {
  const [error, setError] = useState()
  axios.interceptors.response.use(null, function(error) {
    setError(error)
    return Promise.reject(error);
  });
  return [error, setError]
}


