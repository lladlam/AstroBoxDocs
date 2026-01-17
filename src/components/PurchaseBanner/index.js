import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// 定义 Banner 数据池
const BANNERS = [
  {
    img: '/img/yt-wide.png',
    link: 'https://afdian.com/item/c81a17a2a20611f0ac055254001e7c00'
  },
  {
    img: '/img/festival-wide.png',
    link: 'https://afdian.com/bundle/d4c7f928a29811f0b7665254001e7c00'
  },
  {
    img: '/img/qk-wide.png',
    link: 'https://afdian.com/item/6b40b684a20711f098c952540025c377'
  },
  {
    img: '/img/sticker-wide.png',
    link: 'https://afdian.com/item/1cf14b10a20711f0b2265254001e7c00'
  },
  {
    img: '/img/cd-wide.png',
    link: 'https://afdian.com/item/754ebca6a29411f0beeb52540025c377'
  }
];

export default function PurchaseBanner() {
  const [randomBanner, setRandomBanner] = useState(null);

  useEffect(() => {
    // 组件挂载时随机选择一个
    const index = Math.floor(Math.random() * BANNERS.length);
    setRandomBanner(BANNERS[index]);
  }, []);

  // 如果还没加载出随机结果（SSR阶段），先返回空或默认图
  if (!randomBanner) return null;

  return (
    <a 
      href={randomBanner.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.bannerLink}
    >
      <div className={styles.bannerContainer}>
        <img 
          src={randomBanner.img} 
          alt="AstroBox 周边购买" 
          className={styles.bannerImage} 
        />
      </div>
    </a>
  );
}