import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 mt-20">
      <h1 className="text-[42px] font-bold">📱 Pine Phone Shop</h1>
      <p className="font-medium text-neutral-600">Шинэ утас эндээс сонго</p>
      <Link
        href={"/phones"}
        className="px-5 py-2 bg-slate-900 text-white font-medium rounded-xl"
      >
        Утаснууд үзэх →
      </Link>
    </div>
  );
}
