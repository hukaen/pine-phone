import Link from "next/link";

export default async function Phones({ params }) {
  const { id } = await params;
  const response = await fetch("https://dummyjson.com/products/" + id);

  if (!response.ok) {
    return (
      <div className="flex flex-col items-center gap-4 mt-20">
        <h1 className="text-[42px] font-bold">⚠ Error</h1>
      </div>
    );
  }

  const phone = await response.json();
  console.log(phone);

  return (
    <section className="bg-slate-100 flex justify-center h-screen items-center">
      <div className="flex gap-5 bg-white h-fit justify between w-[1000px]">
        <img src={phone.thumbnail} />
        <div>
          <h1 className="font-bold text-[24px]">{phone.title}</h1>
          <p className="text-[12px]">{phone.description}</p>
          <h1 className="text-[16px] font-bold">{phone.price}</h1>
        </div>
      </div>
    </section>
  );
}
