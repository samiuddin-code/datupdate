import Head from 'next/head';
import React from 'react';

const Meta = ({
  keywords = 'dat consultancy',
  description = 'dat description',
  image = 'https://www.datconsultancy.com/uploads/1566660956688-frances-gunn-c9z9RlCh0Zo-unsplash.webp',
  title = 'Dat Consultancy',
  children,
  directory = 'images-for-serp/',
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DAT Engineering Consultancy",
    "alternateName": "DAT",
    "url": "https://www.datconsultancy.com/",
    "logo": "https://www.datconsultancy.com/",
    "sameAs": [
      "https://www.facebook.com/DATengineeringConsultancy/",
      "https://www.instagram.com/homesbydat/",
      "https://www.linkedin.com/company/dat-engineering-consultancy"
    ]
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${process.env.IMAGE_DOMAIN}/uploads/${directory}${image}`} />
      <meta name="theme-color" content="#137749" />
      <link rel="manifest" href="/manifest.json" />
      <link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="stylesheet"></link>

      <meta name="ahrefs-site-verification" content="a9b00edc147333d461ac9b195ded6ec8bab026e5f95b65b758f7dd3857bd05d0" />
      <meta name="google-site-verification" content="3ynKiXSWUkoLS9j6tgl0YHWTKec6gBY28zjZtpGIREI" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {children}
    </Head>
  );
};

export default Meta;
