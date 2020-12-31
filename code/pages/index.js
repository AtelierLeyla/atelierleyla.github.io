import Link from "next/link";
export default () => (
  <div>
    Atelier Leyla
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>About</a>
    </Link>
  </div>
);
