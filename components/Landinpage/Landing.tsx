import React from 'react'
import s from "./Landing.module.scss";
import Image from "next/image";
import Link from 'next/link';

const Landing = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.title}>
          <h1>Crypt <span>X</span></h1>
        </div>
        <div className={s.imagewrapper}>
         <Image
          src="/images/flower.png"
          alt=""
          layout='fill'
        />
        </div>
        <div className={s.content}>
          <h3>Jump start your crypto portfolio</h3>
          <p>Take your investment portfolio to next level</p>
          <Link href="/home">
            <div className={s.btn}>
              Get Started
            </div>
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Landing