/* eslint-disable import/no-extraneous-dependencies */

import DataTable from 'react-data-table-component';

const Tabel = ({ data }) => {
  const tableData = data.features.map((feature) => ({
    kecamatan: feature.properties.kecamatan,
    element: feature.properties.element,
    tahun: feature.properties.tahun,
    nilai: feature.properties.nilai,
    satuan: feature.properties.satuan,
    sumber: feature.properties.sumber,
    keterangan: feature.properties.keterangan,
  }));
  console.log(tableData);
  return (
    <div>
      tabel data
      <div style={{ height: '500px', width: '1000px' }}>
        <DataTable
          title="Data Covid23"
          columns={[
            { name: 'Kecamatan', selector: 'kecamatan' },
            { name: 'Element', selector: 'element' },
            { name: 'Tahun', selector: 'tahun' },
            { name: 'Nilai', selector: 'nilai' },
            { name: 'Satuan', selector: 'satuan' },
            { name: 'Sumber', selector: 'sumber' },
            { name: 'Keterangan', selector: 'keterangan' },
          ]}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default Tabel;
