import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Empower Your Business with Cutting-Edge IT Services | Sketchish',
  description: 'Transform your business with our comprehensive IT services. From seamless network solutions to advanced cybersecurity, Sketchish delivers tailored technology solutions for optimal efficiency and growth. Explore our expertise today!',
  siteName: 'Sketchish',
}

export default function RootLayout({ children }) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <header>

        <meta property="og:image" content="https://sketchish.com/opengraph-image.png?67f65930403b8043" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5JDQQH6D');
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="0b533f50-b35d-4e31-a202-2444dae443f9";
              (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
              s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `,
          }}
        />
      </header>
      <body className={inter.className}>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JDQQH6D"
          height="0" width="0"></iframe>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
