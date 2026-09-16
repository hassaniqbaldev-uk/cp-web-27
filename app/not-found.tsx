import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-2 text-sm tracking-wide uppercase">404</p>

        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>

        <p className="mb-6 text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block rounded-md bg-black px-5 py-3 text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
