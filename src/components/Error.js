import React from 'react';
import { Button, Result } from 'antd';


function Error() {
    return (
        <Result
        status="500"
        title="Sorry, something went wrong."
        />
    );
  }
  
  export default Error;

