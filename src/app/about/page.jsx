"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter()
    const isLogdin = true;
    const handelAddress= ()=>{
        if(isLogdin){
            router.push("/about/address")
        }else{
            router.push("/")
        }
    }
    return (
        <div>
            <p>
                this is aboute
            </p>
            <button type='button' onClick={handelAddress}>
                address
            </button>
        </div>
    );
};

export default About;