const features = [
  {
    id: '1',
    heading: 'casino',
    text: 'Explore various Casino games,\ncard games on our platform.',
    imageUrl: '/assets/images/home/features/cassino-ofertas.webp',
    imageAlt: 'casino offers',
  },
  {
    id: '2',
    heading: 'sports',
    text: 'All major sports games are\navailable on our platform.',
    imageUrl: '/assets/images/home/features/ofertas-esportivas.webp',
    imageAlt: 'casino offers',
  },
]

export default function FeatureImages() {
  return (
    <div>
      <div className="mx-auto flex justify-center">
        <ul
          role="list"
          className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <li
              key={feature.id}
              className="block relative rounded-md overflow-hidden border border-neutral-700 cursor-pointer opacity-80 hover:opacity-100 ease-linear duration-200"
            >
              <img
                className="aspect-[3/2] w-full object-cover ease-linear duration-200"
                src={feature.imageUrl}
                alt={feature.imageAlt}
              />
              <div className="absolute text-center w-full py-2 bottom-0 mt-6 text-lg font-semibold tracking-tight text-neutral-200 bg-neutral-800 bg-opacity-75">
                <h3 className="uppercase">{feature.heading}</h3>
                <p className="text-sm px-2 m-0 leading-4 font-light whitespace-pre-line">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
