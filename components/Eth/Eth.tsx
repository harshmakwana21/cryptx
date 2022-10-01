import React from 'react'
import s from "./Eth.module.scss";
import Image from 'next/image';
import Link from 'next/link';


const Eth = () => {
  return (
    <div className={s.container}>
        <div className={s.content1}>
            <div className={s.Tradingp}>
            <h1>Trading</h1>
            <div className={s.settingswrap}>
            <Image
          src="/images/icons/settings.svg"
          alt="Picture of the "
        layout='fill'
        /> 
            </div>
            </div>
        <div className={s.name}>
             <span>BTC</span>
             <div className={s.under}>
               <span>ETH</span>
             </div>
            <span>LTC</span>
            <span>XRP</span>
            <span>EOS</span>
        </div>

        <div className={s.items}>
                <div className={s.iconwrapper}>
                <Image
                src="/images/icons/eth.svg"
                alt="Picture of the "
                layout='fill'
                 />
                </div>

                 <div className={s.content}>
                    <h4>Ethereum</h4>
                    <span>ETH</span>
                 </div>
                 <div className={s.graph}>
                 <Image
                src="/images/icons/g.svg"
                alt="Picture of the "
                layout='fill'
                 />
                 </div>
                 <div className={s.price}>
                    <h4>$503.12</h4>
                    <span>50 ETH</span>
                 </div>
            </div>

             <div className={s.graph1}>
                <div className={s.gwrap}>
                    <Image
                        src="/images/graph.png"
                        alt="Picture of the "
                        layout='fill'
                    />
                </div>
                <div className={s.btns}>
                  <div className={s.btn1}>
                    <span>Buy</span>
                  </div>
                <div className={`${s.btn1} ${s.btn2}`}>
                    <span>Sell</span>
                </div>
                 </div>  
             </div>

             <div className={s.name1}>
                <div className={s.price}>
                    <h6>At Price | USD</h6>
                    <span>0.031</span>
                </div>
                <hr />
                <div className={s.amount}>
                    <h6>Amount</h6>
                    <div className={s.wrap}>
                        <span>345 USD</span>
                        <div className={s.percent}>
                            <span>25%</span>
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>
                <hr />
             </div>
           

        </div>
    </div>
  )
}

export default Eth