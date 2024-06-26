import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <Link href={"/"} className=" font-bold text-xl">
          Job Leyen
        </Link>
        <nav className=" flex gap-4  *:py-2 *:px-4 *:rounded-md">
          <Link className="bg-gray-200" href={"/register"}>
            Login
          </Link>
          <Link className="bg-blue-600 text-white" href={"/post"}>
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
