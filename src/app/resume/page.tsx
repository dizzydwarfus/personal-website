import SummaryPage from "@/components/SummaryPage";

export default function ResumePage() {
  return (
    <main className="min-h-screen text-white max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl mb-6">My Resume</h1>
      <p>Provide a downloadable PDF or a summary of your CV here.</p>

      <SummaryPage />
    </main>
  );
}
