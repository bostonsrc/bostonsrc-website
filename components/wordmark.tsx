import Image from "next/image";
import Link from "next/link";

type WordmarkProps = {
  compact?: boolean;
};

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <Link className="wordmark" href="/" aria-label="Boston Scientific Research Center home">
      <Image
        alt="Boston Scientific Research Center"
        className={`wordmark__image ${compact ? "wordmark__image--compact" : ""}`}
        height={1024}
        priority
        src="/bsr-logo.png"
        width={1536}
      />
    </Link>
  );
}
