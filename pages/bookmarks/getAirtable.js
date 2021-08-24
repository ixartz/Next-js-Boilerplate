const Airtable = require('airtable');

const baseId = 'appuSeckjfJtK8Pef';

export default async function getAirtable(tableName, apiKey) {
  const base = new Airtable({
    apiKey: apiKey,
  }).base(
    // process.env.AIRTABLE_BASE_ID
    baseId
  );

  const table = base(tableName);
  const records = JSON.parse(
    JSON.stringify(
      await table
        .select({
          // maxRecords: 100,
          sort: [{ field: 'created', direction: 'desc' }],
        })
        .all()
    )
  );
  return records;
}
