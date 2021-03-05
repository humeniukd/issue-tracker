import axios from 'axios'

const BASE = 'http://localhost:8000/api'

export const STATUSES = {
  OPEN: 0,
  PENDING: 1,
  CLOSED: 2,
}

export const fetchIssues = () => axios.get(`${BASE}/issues`)