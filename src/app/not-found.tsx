import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-primary/20">404</div>
      <h1 className="mt-4 text-3xl font-bold text-text md:text-4xl">
        Lost in the Himalayas?
      </h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry — there are
        plenty of amazing destinations to explore!
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light"
        >
          Go Home
        </Link>
        <Link
          href="/destinations"
          className="rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Explore Destinations
        </Link>
      </div>
    </div>
  );
}
