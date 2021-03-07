import axios from 'axios'

const BASE = process.env.REACT_APP_API || 'http://localhost:8000/api'

export const STATUSES = {
  OPEN: 0,
  PENDING: 1,
  CLOSED: 2,
}

export const fetchIssues = () => axios.get(`${BASE}/issues`)

export const patchIssue = (issueId, status) =>
  axios.patch(`${BASE}/issues/${issueId}`, { status })