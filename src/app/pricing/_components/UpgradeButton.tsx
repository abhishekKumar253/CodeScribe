import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {
  const CHEKOUT_URL =
    "https://codescribe.lemonsqueezy.com/buy/061c8f96-feca-473b-a938-7d42e26b3396";

  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all">
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
