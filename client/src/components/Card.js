import React, { useState } from 'react'
import Forward from '@material-ui/icons/Forward'
import { Box, Button, Paper } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { STATUSES } from '../api'
import { usePatchIssue } from '../hooks'

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function Card({ issue, refresh }) {
  const classes = useStyles();
  const [isLoading, patch] = usePatchIssue();
  const [isOpen, setIsOpen] = useState(false);

  const status = status => {
    switch (status) {
      case STATUSES.OPEN:
        return STATUSES.PENDING
      case STATUSES.PENDING:
        return STATUSES.CLOSED
    }
  }
  const handleClose = () => setIsOpen(false)

  const handleConfirm = () => {
    patch(issue.id, status(issue.status)).then(refresh)
    handleClose()
  }

  return <Paper className={classes.paper}>
    <Box display="flex">
      <Box flexGrow={1}>
        <h3>{issue.title}</h3>
        <br/>
        {issue.description}
      </Box>
      {STATUSES.CLOSED !== issue.status &&
        <Box display="flex" justifyContent="center">
          <Button
            onClick={() => setIsOpen(true)}>
            <Forward/>
          </Button>
        </Box>}
    </Box>
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`You about to change status of ${issue.title}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={isLoading}
            onClick={handleConfirm}
            color="primary"
            autoFocus>
          Confirm
        </Button>
        <Button onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  </Paper>
}

export default Card;