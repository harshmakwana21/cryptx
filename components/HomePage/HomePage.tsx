import React from 'react'
import s from "./Home.module.scss";
import Image from 'next/image';
import Link from 'next/link';


const HomePage = () => {
  return (
    <div className={s.container}>
        <div className={s.profile}>
            <div className={s.imagewrapper}>
        <Image
          src="/images/profilepic.png"
          alt="Picture of the "
        layout='fill'
        />
            </div>
            <div className={`${s.imagewrapper} ${s.size}`}>
            <Image
          src="/images/icons/settings.svg"
          alt="Picture of the "
        layout='fill'
        />
            </div>
        </div>
        <h1>Hello Alex</h1>
        <div className={s.balance}>
            <h3>Current Balance</h3>
            <div className={s.textwrap}>
                <div className={s.price}>
                 <h1>$87,430.12</h1>
                </div>
                <div className={s.percent}>
                    <div className={s.arrow}>
                    <Image
                        src="/images/icons/arrowup.svg"
                        alt="Picture of the "
                        layout='fill'
                        />
                    </div>
                <span>10.2%</span>
                </div>
            </div>
            <div className={s.btns}>
                <div className={s.btn1}>
                    <span>Deposit</span>
                </div>
                <div className={`${s.btn1} ${s.btn2}`}>
                    <span>Withdraw</span>
                </div>
            </div>          
        </div>
        <div className={s.Holdings}>
            <div className={s.htitle}>
                <h1>Holdings</h1>
                <span>see all</span>
            </div>
            <Link href="/eth">
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
                 <div className="price">
                    <h4>$503.12</h4>
                    <span>50 ETH</span>
                 </div>
            </div>
            </Link>
            <Link href="/btc">
            <div className={s.items}>
                <div className={s.iconwrapper}>
                <Image
                src="/images/icons/bit.svg"
                alt="Picture of the "
                layout='fill'
                 />
                </div>

                 <div className={s.content}>
                    <h4>Bitcoin</h4>
                    <span>BTC</span>
                 </div>
                 <div className={s.graph}>
                 <Image
                src="/images/icons/gdown.svg"
                alt="Picture of the "
                layout='fill'
                 />
                 </div>
                 <div className="price">
                    <h4>$26927</h4>
                    <span>2.05 BTC</span>
                 </div>
            </div>
            </Link>
            <Link href="/ltc">
            <div className={s.items}>
                <div className={s.iconwrapper}>
                <Image
                src="/images/icons/ltc.svg"
                alt="Picture of the "
                layout='fill'
                 />
                </div>

                 <div className={s.content}>
                    <h4>Litecoin</h4>
                    <span>LTC</span>
                 </div>
                 <div className={s.graph}>
                 <Image
                src="/images/icons/g.svg"
                alt="Picture of the "
                layout='fill'
                 />
                 </div>
                 <div className="price">
                    <h4>$6927</h4>
                    <span>2.05 LTC</span>
                 </div>
            </div>
            </Link>
            <Link href="xrp">
            <div className={s.items}>
                <div className={s.iconwrapper}>
                <Image
                src="/images/icons/xrp.svg"
                alt="Picture of the "
                layout='fill'
                 />
                </div>

                 <div className={s.content}>
                    <h4>Ripple</h4>
                    <span>XRP</span>
                 </div>
                 <div className={s.graph}>
                 <Image
                src="/images/icons/g.svg"
                alt="Picture of the "
                layout='fill'
                 />
                 </div>
                 <div className="price">
                    <h4>$46337</h4>
                    <span>2.05 LTC</span>
                 </div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default HomePage