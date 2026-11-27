import Link from "next/link";

export default async function Phones() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );

  if (!response.ok) {
    return (
      <div className="flex flex-col items-center gap-4 mt-20">
        <h1 className="text-[42px] font-bold">⚠ Error</h1>
      </div>
    );
  }

  const data = await response.json();
  const phoneList = data.products;
  console.log(phoneList);

  return (
    <section className="bg-slate-100 flex justify-center">
      <div className="flex grid grid-col-4 gap-5 mt-10">
        <h1 className="text-[32px] font-semibold ">📱 Утаснууд</h1>
        <div className="flex flex-wrap gap-5 w-[1260px] justify-center">
          {phoneList.map((phone, index) => {
            return (
              <Link
                href={`/phones/${phone.id}`}
                className="w-[300px] flex flex-col p-6 bg-white rounded-2xl justify-center items-center gap-5"
                key={index}
              >
                <img src={phone.thumbnail} />
                <div className="w-full">
                  <h1 className="font-bold">{phone.title}</h1>
                  <p>{phone.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
