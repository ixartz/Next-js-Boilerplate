// src/templates/SportGroupPage.js
import React from 'react';
import fs from 'fs';
import path from 'path';

function SportGroupPage({ group, sports }) {
  return (
    <div>
      <h1>{group.replace(/-/g, ' ')}</h1>
      <ul>
        {sports.map((sport) => (
          <li key={sport.key}>
            <a
              href={`/sport/${group}/${sport.description.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {sport.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(
    process.cwd(),
    'public/data/the-odds-api',
    'all_sport.json'
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const groups = [
    ...new Set(
      jsonData.map((sport) => sport.group.toLowerCase().replace(/\s+/g, '-'))
    ),
  ];

  const paths = groups.map((group) => ({
    params: { group },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(
    process.cwd(),
    'public/data/the-odds-api',
    'all_sport.json'
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const groupSports = jsonData.filter(
    (sport) => sport.group.toLowerCase().replace(/\s+/g, '-') === params.group
  );

  return { props: { group: params.group, sports: groupSports } };
}

export default SportGroupPage;
