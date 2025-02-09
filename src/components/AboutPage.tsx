import FlipCard from '@/components/FlipCard';
import AboutTabs from '@/components/AboutTabs';

export default function AboutPage() {
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

        {/* About + Tabs */}
        <div className="flex-1 text-gray-100">
          <h1 className="text-4xl mb-4">About Me</h1>
          <p className="text-lg mb-6">
            Hi, I&apos;m Lian. I&apos;m a multi-faceted enthusiast with a
            passion for finance/economics, technology, data science, and more...
          </p>
          <AboutTabs />
        </div>
      </div>
    </main>
  );
}