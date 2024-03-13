import Link from "next/link";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="px-4 rounded-md py-1.5 bg-black text-white" href="/mysum">Go to test</Link>
    </main>
  );
}
