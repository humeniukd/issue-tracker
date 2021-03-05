import { useIssues } from '../hooks'
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function Issues() {
  const [isLoading, issues] = useIssues()

  const classes = useStyles();

  return (
    isLoading ? 'Loading...' : <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4} spacing={3}>
          {issues.filter(issue => 0 === issue.status)
            .map(issue => <Paper className={classes.paper}>{issue.title}</Paper>)}
        </Grid>
        <Grid item xs={4} spacing={3}>
          {issues.filter(issue => 1 === issue.status)
          .map(issue => <Paper className={classes.paper}>{issue.title}</Paper>)}
        </Grid>
        <Grid item xs={4} spacing={3}>
          {issues.filter(issue => 2 === issue.status)
          .map(issue => <Paper className={classes.paper}>{issue.title}</Paper>)}
        </Grid>
      </Grid>
    </div>
  );
}

export default Issues;