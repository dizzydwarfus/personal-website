export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 py-6 mt-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/zhenyang-lian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/dizzydwarfus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
        </div>
        <p className="text-sm">&copy; 2024 Lian</p>
      </div>
    </footer>
  );
}