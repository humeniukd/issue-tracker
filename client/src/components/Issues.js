import { useIssues } from '../hooks'
import React, { useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card'
import { STATUSES } from '../api'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

function Issues() {
  const [isLoading, issues, error, fetch] = useIssues()

  useEffect(() => {
    fetch()
  }, [])

  const classes = useStyles();

  return (
    isLoading ? 'Loading...' : <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          {issues.filter(issue => STATUSES.OPEN === issue.status)
            .map(issue => <Card key={issue.id} issue={issue} refresh={fetch}/>)}
        </Grid>
        <Grid item xs={4}>
          {issues.filter(issue => STATUSES.PENDING === issue.status)
            .map(issue => <Card key={issue.id} issue={issue} refresh={fetch}/>)}
        </Grid>
        <Grid item xs={4}>
          {issues.filter(issue => STATUSES.CLOSED === issue.status)
            .map(issue => <Card key={issue.id} issue={issue} refresh={fetch}/>)}
        </Grid>
      </Grid>
      {error && error.message}
    </div>
  );
}

export default Issues;