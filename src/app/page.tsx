import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { getLatestRelease, findAsset } from "~/lib/github";

const DOWNLOAD_BUTTONS = [
  { label: "macOS ARM", pattern: "aarch64.dmg" },
  { label: "macOS Intel", pattern: "x64.dmg" },
  { label: "Linux AppImage", pattern: ".appimage" },
  { label: "Linux .deb", pattern: ".deb" },
  { label: "Linux .rpm", pattern: ".rpm" },
] as const;

export default async function HomePage() {
  const release = await getLatestRelease();
  const tag = release?.tag ?? "latest";
  const fallbackBase = `https://github.com/nodetec/comet/releases/latest`;

  return (
    <div className="relative isolate h-full overflow-x-hidden bg-neutral-900">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-[#60caf3] to-[#4a42e1] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                alt="Comet logo"
                src="/comet-logo.svg"
                width={44}
                height={44}
                className="h-11 w-auto rounded-md"
              />
              <span className="ml-2 text-2xl font-semibold text-white">
                Comet
              </span>
              <span className="ml-2 text-xs font-semibold text-neutral-400 bg-neutral-800 p-1 border rounded-md border-neutral-700">
                Alpha
              </span>
            </div>
            <a
              href="https://github.com/nodetec/comet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="https://github.com/nodetec/comet/releases/latest" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                <span>Latest: {tag}</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-500"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
            Capture locally transmit globally.
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Comet is a desktop note-taking app that combines private local
            storage with the power to publish directly to the Nostr network.
            Organize with notebooks and tags, write in markdown, and share with
            the world when you&apos;re ready.
          </p>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Install</h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DOWNLOAD_BUTTONS.map(({ label, pattern }) => {
                const asset = release
                  ? findAsset(release.assets, pattern)
                  : undefined;
                const href = asset?.url ?? fallbackBase;

                return (
                  <a
                    key={label}
                    href={href}
                    download
                    className="text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              alt="App screenshot"
              src="/demo.png"
              width={3040}
              height={1882}
              className="w-[76rem]"
              priority
            />
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for writers who value ownership
          </h2>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {[
              {
                name: "Local-first",
                description:
                  "Your notes live on your machine. No accounts, no cloud lock-in, no surveillance.",
              },
              {
                name: "Markdown native",
                description:
                  "Write in markdown with a live preview editor. Your content stays portable and future-proof.",
              },
              {
                name: "Publish to Nostr",
                description:
                  "Share your writing to the Nostr network with one click when you\u2019re ready to go public.",
              },
              {
                name: "Notebooks & tags",
                description:
                  "Organize your notes into notebooks and tag them for fast filtering and retrieval.",
              },
            ].map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold text-white">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm/6 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Comet. Open source under the MIT License.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/nodetec/comet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://github.com/nodetec/comet/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              Releases
            </a>
            <a
              href="https://github.com/nodetec/comet/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              License
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
