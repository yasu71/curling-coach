const CreateNewGameStyles = (theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dateTimeField: {
    width: '47%',
    color: '#2e2e2e',
    '& .MuiInputBase-root': {
      fontSize: '0.85rem',
    },
    '& .MuiFormLabel-root': {
      color: '#2e2e2e',
    },
    '& .MuiButton-label': {
      color: '#2e2e2e',
    },
  },
  time: {
    color: '#2e2e2e',
    '& .MuiButton-label': {
      color: '#2e2e2e',
    },
  },
  locationField: {
    width: '100%',
    '& .MuiFormLabel-root': {
      color: '#2e2e2e',
    },
  },
  teamNames: {
    fontWeight: 400,
  },
});

export default CreateNewGameStyles;
