import React, { useEffect, useState } from 'react';
import { flattenAndRemoveDuplicates, getRelatedItems } from './functions';
import getAirtable from './getAirtable';
import List from './List';
import ListItem from './ListItem';

export default function Bookmarks({ apiKey }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [listThree, setListThree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState('');

  // Load data from Airtable
  useEffect(() => {
    async function fetchData() {
      const records = await getAirtable('bookmarks', apiKey);
      setBookmarks(records);
      setLoading(false);
    }
    fetchData();
  }, []);

  const selectItem = (id) => {
    // Get selected record
    const record = bookmarks.find((x) => x.id === id);
    console.dir(record);

    // Get first degree siblings and assign to list two
    const firstDegreeSiblings = getRelatedItems(record, bookmarks);
    setListTwo(firstDegreeSiblings);

    const secondDegree = flattenAndRemoveDuplicates(
      firstDegreeSiblings,
      bookmarks
    );
    const thirdList = secondDegree.filter(
      (x) => !firstDegreeSiblings.includes(x)
    );
    setListThree(thirdList);

    setSelectedItemId(id);
    console.dir(thirdList);
  };

  return (
    <div className="flex divide-x">
      <List title="All Bookmarks" className="pr-2 -ml-4">
        {loading && <p>Loading&hellip;</p>}
        {bookmarks.length > 0 &&
          bookmarks.map((bookmark) => (
            <ListItem
              key={bookmark.id}
              item={bookmark}
              id={bookmark.id}
              handleClick={selectItem}
              className={selectedItemId === bookmark.id && 'bg-gray-100'}
            />
          ))}
      </List>
      <List title="1st" className="px-2">
        {listTwo.length > 0 &&
          listTwo.map((bookmark) => (
            <ListItem item={bookmark} id={bookmark.id} key={bookmark.id} />
          ))}
      </List>
      <List title="2nd" className="px-2">
        {listThree.length > 0 &&
          listThree.map((bookmark) => (
            <ListItem item={bookmark} id={bookmark.id} key={bookmark.id} />
          ))}
      </List>
    </div>
  );
}
