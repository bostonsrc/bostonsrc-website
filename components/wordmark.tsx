import Link from "next/link";

type WordmarkProps = {
  compact?: boolean;
};

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <Link className="wordmark" href="/" aria-label="Boston Scientific Research Center home">
      <svg
        aria-hidden="true"
        className="wordmark__mark"
        viewBox="0 0 116 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 64V14H46C57 14 64 20 64 29C64 37 59 42 51 44C60 45 67 51 67 60C67 69 60 64 46 64H14ZM46 14C54 14 61 20 61 28C61 36 55 40 46 40H31V14H46ZM46 40C57 40 64 46 64 54C64 61 58 64 47 64H31V40H46ZM84 20C79 15 71 14 65 17C59 20 57 25 57 30C57 37 63 40 72 42C84 45 93 48 93 57C93 66 84 72 72 72C63 72 54 69 48 62M82 14V64M82 45H91C101 45 108 39 108 29C108 19 101 14 91 14H82L108 64"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="wordmark__text">
        <span className="wordmark__eyebrow">BSR</span>
        <span className={`wordmark__name ${compact ? "wordmark__name--compact" : ""}`}>
          Boston Scientific Research Center
        </span>
      </span>
    </Link>
  );
}
