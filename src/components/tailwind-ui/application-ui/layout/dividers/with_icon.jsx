import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500">
          <PlusIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}
