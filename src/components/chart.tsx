type ChartProps = {
  values: number[]
}

export default function Chart({ values }: ChartProps) {
  return (
    <div className="w-full flex items-end gap-2 h-40">
      {values.map((v, i) => (
        <div
          key={i}
          className="bg-indigo-600 w-6 rounded"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  )
}
