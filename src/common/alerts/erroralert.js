import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';

const ErrorAlert = (props) => {
    const { message, open } = props;
    return (
        <Collapse in={open}><Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {message}
        </Alert>
        </Collapse>
    );

}

export default ErrorAlert;

