import React,{useState, useEffect} from "react";
import "./gsap.css";
import {gsap} from 'gsap';
import m_1999_4 from 'assets/imgs/m_1999_4.png';
import m_1999_5 from 'assets/imgs/m_1999_5.png';
import m_12013 from 'assets/imgs/m_2013.png';
import m_2019 from 'assets/imgs/m_2019.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
const imgs = [m_1999_4,m_1999_5,m_12013,m_2019]
function Gsap(props){
    useEffect(()=>{
        gsap.utils.toArray('.m-content').map((section,i)=>{
            section.content = section.querySelector(".content");
            section.bg = section.querySelector(".m-content-bg");
            section.bg.style.backgroundImage = `url(${imgs[i]})`;
            var tl = gsap.timeline();
            tl.to(section,{

            })
        })
    },[]);
    return (<div className="m-content-wraper">
            {
                imgs.map((_,index)=>{
                    return <div className="m-content" style={{marginTop:'30%'}}>
                        <div className="m-content-bg"></div>
                        <div className="m-content-info">
                            <div className="info-time">{index}</div>
                            <div className="info-content" style={{marginTop:'20%'}}>
                            On February 22, 2022, Moscow recognized the territorial claims of groups in the Donbas region seeking independence from Kyiv, a move which Kyiv called a violation of Ukraine’s sovereignty. Two days later, in a TV address, Putin declared a “special military operation” to “demilitarize” and “denazify” Ukraine would begin in order to protect people who had been subjected to “abuse and genocide.” He said the “operation” would not include the occupation of Ukrainian territories. Shortly after, the Russian military launched multiple strikes on dozens of military targets inside Ukraine. 
                            </div>
                            <div className="info-content" style={{marginTop:'20%'}}>
                            On February 22, 2022, Moscow recognized the territorial claims of groups in the Donbas region seeking independence from Kyiv, a move which Kyiv called a violation of Ukraine’s sovereignty. Two days later, in a TV address, Putin declared a “special military operation” to “demilitarize” and “denazify” Ukraine would begin in order to protect people who had been subjected to “abuse and genocide.” He said the “operation” would not include the occupation of Ukrainian territories. Shortly after, the Russian military launched multiple strikes on dozens of military targets inside Ukraine. 
                            </div>
                            <div className="info-content" style={{marginTop:'20%'}}>
                            On February 22, 2022, Moscow recognized the territorial claims of groups in the Donbas region seeking independence from Kyiv, a move which Kyiv called a violation of Ukraine’s sovereignty. Two days later, in a TV address, Putin declared a “special military operation” to “demilitarize” and “denazify” Ukraine would begin in order to protect people who had been subjected to “abuse and genocide.” He said the “operation” would not include the occupation of Ukrainian territories. Shortly after, the Russian military launched multiple strikes on dozens of military targets inside Ukraine. 
                            </div>
                        </div>

                    </div>
                })
            }
    </div>)
}
export default Gsap;