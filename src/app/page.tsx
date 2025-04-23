import CardComponent from "@/components/CardComponent"

// interface ICardData = {

// }

export default function Page() {

  const data = [
    {
      title: "Department Information",
      subtitle: "Dolor Sit Amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://heroui.com/images/hero-card-complete.jpeg"
    },
    {
      title: "Exam Regulation",
      subtitle: "Sample Subtitle",
      description: "This is a sample description text that provides information about this particular card item.",
      imageUrl: "https://heroui.com/images/hero-card-complete.jpeg"
    },
    {
      title: "School Fee",
      subtitle: "Secondary Text",
      description: "Here's another example of card content with a description that explains the purpose of this item.",
      imageUrl: "https://heroui.com/images/hero-card-complete.jpeg"
    },
    {
      title: "ITC Policies",
      subtitle: "Secondary Text",
      description: "Here's another example of card content with a description that explains the purpose of this item.",
      imageUrl: "https://heroui.com/images/hero-card-complete.jpeg"
    },
    {
      title: "What is special?",
      subtitle: "Secondary Text",
      description: "Here's another example of card content with a description that explains the purpose of this item.",
      imageUrl: "https://heroui.com/images/hero-card-complete.jpeg"
    },

  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black">Information</h1>
      <div className="grid grid-cols-3 gap-4">
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