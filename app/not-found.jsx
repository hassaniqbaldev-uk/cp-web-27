import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-[15px]">
      <div className="text-center">
        <p className="mb-[5px] text-[8.75px] leading-[12.5px] tracking-wide uppercase">
          404
        </p>

        <h1 className="mb-[10px] text-[22.5px] leading-[25px] font-bold">
          Page not found
        </h1>

        <p className="mb-[15px] text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block rounded-[20px] bg-black px-[12.5px] py-[7.5px] text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
