const items = [
  { id: 1 },
  // More items...
]

export default function Example() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
