interface collectionMetadata {
  name: string;
  description: string;
}

export const meanwhileDescriptions: collectionMetadata[] = [
  {
    name: "North Downs Way",
    description:
      "2 days' walking around the edge of London in early summer 2021",
  },
  {
    name: "London",
    description: "Sitting down in the quieter parts of London, spring 2021",
  },
  {
    name: "Yorkshire Dales",
    description:
      "In and around my grandparents' place in the Yorkshire Dales – summer 2021.",
  },
];

export function getDescription(name: string): collectionMetadata {
  function flatten(str) {
    console.log("str", str);
    let flattened = str.toLowerCase();
    flattened = flattened.replaceAll("s", "");
    flattened = flattened.replaceAll(" ", "");
    return flattened;
  }

  return meanwhileDescriptions.find((x) => flatten(x.name) === flatten(name));
}
