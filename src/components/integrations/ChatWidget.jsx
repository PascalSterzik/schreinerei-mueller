'use client'

import Script from 'next/script'
import brand from '../../../brand.config'

/**
 * Tawk.to live chat widget integration.
 * Only loads when chat is configured in brand.config.js.
 *
 * To set up:
 * 1. Create free account at tawk.to
 * 2. Get your property ID from the dashboard
 * 3. Set integrations.chat.provider to 'tawkto'
 * 4. Set integrations.chat.widgetId to your property ID
 */
export default function ChatWidget() {
  const chat = brand.integrations?.chat
  if (!chat?.provider || !chat?.widgetId) return null

  if (chat.provider === 'tawkto') {
    return (
      <Script id="tawkto-widget" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/${chat.widgetId}';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
    )
  }

  return null
}
