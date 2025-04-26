import CardComponent from "@/components/CardComponent"
import data from "./data.js";
import Sidebar from "@/components/Sidebar";

export default function Page() {

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black">Information</h1>
      {/* <div className="grid grid-cols-3 gap-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}