/* eslint-disable @typescript-eslint/no-use-before-define */
import 'leaflet/dist/leaflet.css';

import { useState } from 'react';
import { GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet';

import kecamatanData from '../../../public/kecamatan.json';

interface Coords {
  lat: number;
  lng: number;
}

function ChangeView({ coords }: { coords: Coords }): null {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [geoData] = useState<Coords>({
    lat: -7.3708,
    lng: 107.8167,
  });
  const center: [number, number] = [geoData.lat, geoData.lng];
  const rangeColors = ['#0B2447', '#27529e', '#576CBC', '#7b8ac4', '#A5D7E8'];

  const getColor = (value: number, _ranges: number) => {
    const index = result.range.findIndex((range: string) => {
      const rangeParts = range.split('-');
      const lowerBound = parseInt(rangeParts[0], 10);
      const upperBound = parseInt(rangeParts[1], 10);
      return lowerBound <= value && value <= upperBound;
    });
    return rangeColors[index];
  };

  const geoJsonStyle = (feature: any) => {
    const nilaiValue = parseInt(feature.properties.nilai, 10);
    const arr = kecamatanData.features.map((feature: any) =>
      parseInt(feature.properties.nilai, 10)
    );
    const maxValue = Math.max(...arr);
    const range = Math.ceil(maxValue / 5);

    return {
      fillColor: getColor(nilaiValue, range),
      weight: 1,
      opacity: 1,
      color: '#777', // warna border
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };
  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      mouseover: () => {
        layer.setStyle({ color: '#232323', weight: 3 });
        layer
          .bindPopup(
            `<b>${feature.properties.judul}</b> <br />
            <b>${feature.properties.kecamatan}</b><br />
             Total : ${feature.properties.nilai}<br />
             Keterangan ${feature.properties.keterangan}`
          )
          .openPopup();
      },
      mouseout: () => {
        layer.setStyle({ color: '#777', weight: 1 });
        layer.closePopup();
      },
    });
  };

  const arr = kecamatanData.features.map((feature: any) =>
    parseInt(feature.properties.nilai, 10)
  );
  const maxValue = Math.max(...arr);
  const range = Math.ceil(maxValue / 5);

  const result = arr.reduce(
    (acc: { count: number[]; range: string[] }, val: number) => {
      const index = Math.floor(val / range);
      acc.count[index] = acc.count[index] ? acc.count[index] + 1 : 1;
      const min = index * range;
      const max = (index + 1) * range - 1;
      const rangeStr = `${min}-${max}`;
      if (!acc.range.includes(rangeStr)) {
        acc.range.push(rangeStr);
      }
      return acc;
    },
    { count: [], range: [] }
  );

  result.range.sort((a, b) => {
    const maxA = parseInt(a.split('-')[1]);
    const maxB = parseInt(b.split('-')[1]);
    return maxB - maxA;
  });

  const legend = (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="leaflet-bottom leaflet-left mb-2 ml-2 rounded bg-white px-4 py-2">
      <div>Keterangan :</div>
      {result.range.map((range, index) => (
        <div key={index}>
          <i
            style={{
              backgroundColor: rangeColors[index],
              display: 'inline-block',
              width: '15px',
              height: '15px',
              marginRight: '5px',
            }}
          ></i>
          {range}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <MapContainer
        className="z-0"
        center={center}
        zoom={5}
        style={{ height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView coords={center} />
        <GeoJSON
          data={kecamatanData}
          onEachFeature={onEachFeature}
          style={geoJsonStyle}
        />
        {legend}
      </MapContainer>
    </>
  );
}
