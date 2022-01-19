import {Box, TextField} from '@mui/material'


const SignUp = () => {  
return(
    <Box>
       <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
    </Box>
)
}

export default SignUp;