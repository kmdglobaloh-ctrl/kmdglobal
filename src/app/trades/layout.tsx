import type { Metadata } from "next";
import { TRADES_DEMO_CONFIG } from "@/lib/trades/data";
import { TradesNavbar } from "@/components/trades/navbar";
import { TradesFooter } from "@/components/trades/footer";
import { TradesMobileCta } from "@/components/trades/mobile-cta-bar";

const config = TRADES_DEMO_CONFIG;
const BASE = "/trades";

export const metadata: Metadata = {
  title: { default: `${config.company.name} | ${config.trade.plural}`, template: `%s | ${config.company.name}` },
  description: `${config.company.name} — ${config.company.tagline} Serving ${config.company.addressCity} and surrounding areas.`,
  robots: { index: config.seo.robotsIndex, follow: config.seo.robotsIndex },
};

export default function TradesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <TradesNavbar config={config} basePath={BASE} />
      <main>{children}</main>
      <TradesMobileCta config={config} basePath={BASE} />
      <TradesFooter config={config} basePath={BASE} />
    </div>
  );
}
