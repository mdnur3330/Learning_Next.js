"use client"
import { Geist, Geist_Mono, Roboto , Poppins} from "next/font/google";

import { useRouter } from 'next/navigation';
import React from 'react';
import './aboute.css'
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
        <div className="testing-perpers">
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