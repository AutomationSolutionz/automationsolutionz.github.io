import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Both Zeuz Server and Zeuz Node were designed from the ground up to be
        easily accessible to non-technical and technical audience alike.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Actions in Zeuz Node lets you focus on your your test
        scenarios instead of technical details.
      </>
    ),
  },
  {
    title: <>Powered by Python and Open Source</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Our test client - Zeuz Node is written in Python and its open source.
        It can be easily extended to meet your needs.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <script>
          var o="d14941b2",n=["Object.assign","Symbol","Symbol.for"].join("%2C"),a=window;function t(o,n){void 0 === n && (n = !1), "complete" !== document.readyState && window.addEventListener("load", t.bind(null, o, n), { capture: !1, once: !0 });var a=document.createElement("script");a.type="text/javascript",a.async=n,a.src=o,document.head.appendChild(a)}function r(){var n;if(void 0===a.CommandBar){delete a.__CommandBarBootstrap__;var r=Symbol.for("CommandBar::configuration"),e=Symbol.for("CommandBar::orgConfig"),c=Symbol.for("CommandBar::disposed"),i=Symbol.for("CommandBar::isProxy"),m=Symbol.for("CommandBar::queue"),l=Symbol.for("CommandBar::unwrap"),d=[],s=localStorage.getItem("commandbar.lc"),u=s&&s.includes("local")?"http://localhost:8000":"https://api.commandbar.com",f=Object.assign(((n={ })[r]={uuid:o},n[e]={ },n[c]=!1,n[i]=!0,n[m]=new Array,n[l]=function(){return f},n),a.CommandBar),p=["addCommand","boot"],y=f;Object.assign(f,{shareCallbacks:function(){return{ }},shareContext:function(){return{ }}}),a.CommandBar=new Proxy(f,{get:function(o,n){return n in y?f[n]:p.includes(n)?function(){var o=Array.prototype.slice.call(arguments);return new Promise((function(a,t){o.unshift(n, a, t), f[m].push(o)}))}:function(){var o=Array.prototype.slice.call(arguments);o.unshift(n),f[m].push(o)}}}),null!==s&&d.push("lc=".concat(s)),d.push("version=2"),t("".concat(u,"/latest/").concat(o,"?").concat(d.join("&")),!0)}}void 0===Object.assign||"undefined"==typeof Symbol||void 0===Symbol.for?(a.__CommandBarBootstrap__=r,t("https://polyfill.io/v3/polyfill.min.js?version=3.101.0&callback=__CommandBarBootstrap__&features="+n)):r();
          window.CommandBar.boot();
        </script>
      </Head>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
