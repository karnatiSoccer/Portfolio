
import Script from 'next/script';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans select-none relative isolate overflow-x-hidden">
        <Script src="https://cdn.aidesigner.ai/effects/runtime/v1.js" strategy="afterInteractive" data-aifx-key="aifx_pk_935ddb5b51d142c79d102253acedd7cc" />
        {/* Riso Dither Background Effect */}
        <div
          data-aifx="dither"
          data-aifx-colors="#7b7878,#000000"
          data-aifx-bg="#000000"
          data-aifx-speed="0.000001"
          data-aifx-contrast="2.5"
          data-aifx-flow-angle="129"
          data-aifx-glow="0.44"
          className="fixed inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[920px] w-full min-h-screen bg-[#1c1c1a]/40 backdrop-blur-2xl shadow-2xl flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}