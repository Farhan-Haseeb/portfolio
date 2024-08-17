import Link from "next/link";

// DO NOT REMOVE THIS
export default function Copyright() {
  return (
    <>
      <div className="full bg-slate-100 text-center py-1">
        &copy; {new Date().getFullYear()} All rights reserved. Made with 🖤 by{" "}
        <Link href="https://www.umairjibran.com" className="text-blue-900">
          Umair Jibran
        </Link>
        .
      </div>
    </>
  );
}
