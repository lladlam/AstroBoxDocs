import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import PurchaseBanner from '@site/src/components/PurchaseBanner';

const FeatureList = [
  {
    title: '跨平台支持',
    // 由于AstroBox官网图片为webp格式，无法转化为svg，故我进行了图片导入魔改
    img: require('@site/static/img/astronaut.png').default,
    description: (
      <>
        AstroBox 基于 Rust & Tauri 以及 Next.js 构建，一套代码全端可用。
        支持 <strong>Windows、macOS、Linux、Android、iOS、iPadOS</strong> 等多个平台，
        打破传统工具“仅限 Android”的限制。
      </>
    ),
  },
  {
    title: '资源社区丰富',
    img: require('@site/static/img/plugin.png').default,
    description: (
      <>
        不仅有官方数据源，还有 N 多个插件提供数据源支持。
        可下载海量表盘、快应用，<strong>一键批量安装</strong>，打破数据源壁垒。
      </>
    ),
  },
  {
    title: '设备管理全能',
    img: require('@site/static/img/device.png').default,
    description: (
      <>
        安装表盘、快应用，刷写固件，<strong>拖拽文件即可加入任务队列</strong>，按顺序一键安装。
        连接设备后，部分手机互联操作可由 AstroBox 接管，无需频繁切换应用。
      </>
    ),
  },
];

// 在这里我修改了 Feature 组件的参数，将 Svg 改为 img
function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* 我在这里将 <Svg /> 改为 <img src={img} /> */}
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
	  <PurchaseBanner />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}