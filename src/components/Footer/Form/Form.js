import React from 'react';
import FormStyle from './style/FormStyle';
import Image from './Image';
import FormText from './FormText';
import FormInput from './FormInput';

const Form = () => {
    return (
        <FormStyle>
          <Image/>
          <FormText/>
          <FormInput/>
        </FormStyle>
    )
};

export default Form;
