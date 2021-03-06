import React, { useCallback, useState } from 'react'
import Forward from '@material-ui/icons/Forward'
import { Button, Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { patchIssue, STATUSES } from '../api'

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function Card({ issue, refresh }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false)

  const onClick = useCallback((id, status) => {
    async function patch(id, status) {
      try {
        setIsLoading(true)
        await patchIssue(id, status)
      } catch (e) {
      } finally {
        refresh()
        setIsLoading(false)
      }
    }
    patch(id, status)
  }, [setIsLoading])

  const status = status => {
    switch (status) {
      case STATUSES.OPEN:
        return STATUSES.PENDING
      case STATUSES.PENDING:
        return STATUSES.CLOSED
    }

  }

  return <Paper className={classes.paper}>
    <b>{issue.title}</b>
    <br/>
    {issue.description}
    {issue.status !== STATUSES.CLOSED && <Button disabled={isLoading}
      onClick={() => onClick(issue.id, status(issue.status))}>
      <Forward/>
    </Button>}
  </Paper>
}

export default Card;