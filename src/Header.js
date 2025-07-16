import React, { useEffect } from 'react';
import Box from '@mui/material/Box'; 
import Data from './Data';
 
const Header = () => {
 
    return ( 
        <Box style={{ maxWidth:600, margin: '0 auto', padding: '20px' }}> 
            <Box sx={{ width: '100%' }}>
       <h2  >COVID</h2>
       <h3  sx={{ mt: '10px', mb: '5px'}}>Tracker</h3>
    </Box>
    <Data />
        </Box>
     );
}
 
export default Header;