export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side: Brand / Name */}
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Marc Daniel Caracas. All rights reserved.
        </p>

        {/* Right side: Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
          <a href="mailto:youremail@example.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}