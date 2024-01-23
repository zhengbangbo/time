import TimeDisplay  from "@/app/TimeDisplay";

const timeArray = [
  {
    name: "UTC +8:00",
    offset: 8
  },
  {
    name: "UTC -7:00",
    offset: -7
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-4xl font-bold text-gray-800">Time</div>
      <div className="flex flex-col items-center justify-center">
        {
          timeArray.map((item, index) => {
            return <TimeDisplay key={index} name={item.name} offset={item.offset} />
          })
        }
      </div>
    </main>
  );
}
