import React from 'react';

export default function ListItem({
  item,
  handleClick = () => null,
  className,
}) {
  const title =
    item.fields.title || item.fields.content || cleanUrl(item.fields.url) || '';
  const tags = item.fields.tags;

  return (
    <li
      key={item.id}
      className={`flex justify-between space-x-4 text-left w-full hover:bg-gray-100 active:bg-gray-200 rounded cursor-pointer px-4 py-3 ${className}`}
      onClick={() => handleClick(item.id)}
    >
      {/*
				<img
				src={`https://mymind-sam.s3.amazonaws.com/${item.fields.id}.png`}
				onerror={`this.src='https://mymind-sam.s3.amazonaws.com/${item.fields.id}.jpeg'`}
				alt="thumbnail"
				className="w-12 h-12 object-cover rounded-lg bg-gray-200"
			/>
			*/}
      <div className="flex-grow w-80 leading-tight">
        <p className="truncate">{title}</p>
        <div className="flex items-center space-x-1">
          <img
            src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${item.fields.url}`}
            alt={item.fields.url}
            width="12"
            height="12"
            className="w-4 h-4 rounded"
          />
          <a
            href={item.fields.url}
            title={title}
            className="text-gray-600 text-sm truncate hover:underline"
            target="new"
          >
            {hostname(item.fields.url)}
          </a>
          {item.fields.tags &&
            tags.length > 0 &&
            tags.map((tag, i) => {
              if (i < 2) {
                return <Tag text={tag} />;
              } else return null;
            })}
          {tags && tags.length > 2 && (
            <Tag text={`+${item.fields.tags.length - 2}`} />
          )}
        </div>
      </div>
      <p>{/*new Date(item.fields.created)*/}</p>
    </li>
  );
}

function Tag({ text }) {
  return (
    <span
      className="px-1 bg-gray-200 rounded-full text-sm text-gray-700 truncate"
      style={{ maxWidth: '8rem' }}
    >
      {text}
    </span>
  );
}

function cleanUrl(url) {
  if (url && url !== '') {
    let newUrl = url.replace('https://', '');
    newUrl = newUrl.replace('http://', '');
    newUrl = newUrl.replace('www.', '');

    if (newUrl.charAt(newUrl.length - 1) === '/') {
      newUrl = newUrl.slice(0, -1);
    }

    return newUrl;
  } else {
    return '';
  }
}

function hostname(url) {
  if (url && url !== '') {
    let newUrl = new URL(url);
    let hostname = newUrl.hostname;
    return hostname.replace('www.', '');
  }
  return '';
}
