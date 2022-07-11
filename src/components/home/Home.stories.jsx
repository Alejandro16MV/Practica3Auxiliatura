import React from 'react';
import  Home  from './Home';

export default{

    title: 'ALEJANDROMAMANI/Home',
    component: Home,
}

const Template = (args) => <Home {...args} />;

export const home= Template.bind({});
  
home.args ={
     
    nombre:'',
    camBio:false,
    bio: [
        {
            emoji: '',
            text:''
        },
        {
            emoji: '',
            text:''
        },
        {
            emoji: '',
            text:''
        },
        {
            emoji: '',
            text:''
        }
    ]   
};