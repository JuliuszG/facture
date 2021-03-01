import React from 'react';
import FormInputStyle from './style/FormInputStyle';
import Button from './style/Button';
import Input from './style/InputStyle';

const FormInput = () => { 
    return (
        <>
         <FormInputStyle action="">
             <Input type="text" placeholder="Enter your email" />
             <Button type="submit" value="Subscribe" />
         </FormInputStyle>    
        </>
    )
}

export default FormInput