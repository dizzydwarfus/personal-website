import FlipCard from "@/components/FlipCard";
import SummaryTabs from "@/components/SummaryTabs";

export default function SummaryPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4 text-gray-200">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Flip Card Section */}
        <div className="flex-1">
          <FlipCard
            frontImg="/images/logo_v2.png"
            backImg="/images/about_me_v2.JPG"
          />
        </div>

        {/* Summary + Tabs */}
        <div className="flex-1 text-gray-100">
          <SummaryTabs />
        </div>
      </div>
    </main>
  );
}
