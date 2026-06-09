"use client";

import type { TradeConfig } from "@/lib/trades/config";

export function TradesMobileCta({ config, basePath }: { config: TradeConfig; basePath: string }) {
  const { company, brand } = config;
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-gray-200 shadow-lg">
      <a href={company.phoneHref} className="flex-1 text-white text-center font-bold py-4 text-sm" style={{ backgroundColor: brand.primary }}>
        📞 Call Now
      </a>
      <a href={`${basePath}/quote`} className="flex-1 text-white text-center font-bold py-4 text-sm" style={{ backgroundColor: brand.secondary }}>
        Free Quote →
      </a>
    </div>
  );
}
