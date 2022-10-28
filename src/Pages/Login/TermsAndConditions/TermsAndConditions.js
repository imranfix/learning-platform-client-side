import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h4>Terms and conditions, Please follow the instruction</h4>
            <h4>Go back to: <Link to='/register'>Register</Link></h4>
        </div>
    );
};

export default TermsAndConditions;