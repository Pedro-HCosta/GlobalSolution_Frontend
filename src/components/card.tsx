type CardProps = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {children}
    </div>
  )
}
