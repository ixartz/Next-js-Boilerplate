export function getRelatedItems(record, allItems) {
  // Fetch links and tags if they exist
  const recordLinks = record.fields.link || [];
  const recordTags = record.fields.tags || [];

  // Get linked records
  const linkedRecords = allItems.filter((x) => recordLinks.includes(x.id));
  // Get matching urls
  const matchingUrls = allItems.filter((x) =>
    urlsDoMatch(x.fields.url || null, record.fields.url || null)
  );
  // Get matching tags
  const matchingTags = allItems.filter((item) => {
    if (item.fields.tags && item.fields.tags.length > 0) {
      return recordTags.some((x) => item.fields.tags.includes(x));
    }
    return false;
  });

  const relatedRecords = linkedRecords.concat(matchingUrls, matchingTags);

  return removeDuplicates(relatedRecords);
}

export function flattenAndRemoveDuplicates(arrayOfArrays, allItems) {
  const concatenated = [].concat.apply(
    [],
    arrayOfArrays.map((x) => getRelatedItems(x, allItems))
  );
  const deDuped = removeDuplicates(concatenated);
  return deDuped;
}

function removeDuplicates(array) {
  return [...new Set(array)];
}

function urlsDoMatch(url1, url2) {
  const excludedUrls = [
    'medium.com',
    'youtube.com',
    'www.youtube.com',
    'vimeo.com',
    'twitter.com',
    'm.youtube.com',
    'email.mg2.substack.com',
  ];

  if (url1 && url2) {
    const one = new URL(url1);
    const two = new URL(url2);
    if (excludedUrls.includes(one.hostname)) {
      return false;
    }
    return one.hostname === two.hostname ? true : false;
  } else {
    return false;
  }
}
