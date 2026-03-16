const REPO = "nodetec/comet";

export type ReleaseAsset = {
  name: string;
  url: string;
};

export type Release = {
  tag: string;
  assets: ReleaseAsset[];
};

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      { next: { revalidate: 300 } }, // cache for 5 minutes
    );

    if (!res.ok) return null;

    const data = await res.json();

    return {
      tag: data.tag_name,
      assets: (data.assets ?? []).map(
        (a: { name: string; browser_download_url: string }) => ({
          name: a.name,
          url: a.browser_download_url,
        }),
      ),
    };
  } catch {
    return null;
  }
}

export function findAsset(
  assets: ReleaseAsset[],
  pattern: string,
): ReleaseAsset | undefined {
  return assets.find((a) =>
    a.name.toLowerCase().includes(pattern.toLowerCase()),
  );
}
