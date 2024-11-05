"use client"

import React from "react";
import gsap from "gsap"
import NumberTicker from "./ui/number-ticker";
import { useGSAP } from "@gsap/react";

function Hero(){
    useGSAP(() => {
        let timeline = gsap.timeline()
        timeline.to(".protecule", {
            y: 80,
            opacity: 1,
            duration: 2,
        });
        timeline.to(".proteculev2", {
            y: 80,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
        });
    },[])
    return(
        <div>
            <div className="flex flex-col items-center">
            <div className="flex justify-center my-4 d-inline-flex" >
                <main className="text-white text-8xl">
                    <p className="protecule">Every </p>
                    <NumberTicker className="protecule whitespace-pre-wrap font-medium tracking-tighter text-white dark:text-black" value={39} />
            
                    <p className="protecule"> seconds, someone is </p>
                 
                    <p className="protecule">hacked.</p>
                </main>
            </div>
        </div>
    </div>
    )
}
export default Hero;