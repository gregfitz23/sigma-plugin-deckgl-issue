import { DeckGL, TextLayer } from "deck.gl";
import Map from "react-map-gl";

import {
  client,
  useConfig,
  // initialize,
} from "@sigmacomputing/plugin";

const initialMapViewState = {
  longitude: -82.55402,
  latitude: 35.60095,
  pitch: 0,
  zoom: 8,
  bearing: 0,
  padding: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

client.config.configureEditorPanel([
  {
    label: "Mapbox Access Token",
    name: "mapboxAccessToken",
    type: "text",
  },
]);

const MinimalPlugin = () => {
  const sigmaConfig = useConfig();

  const mapboxAccessToken = sigmaConfig.mapboxAccessToken;

  if (!mapboxAccessToken) {
    return <div>{"<---- Configure the Mapbox Token"} </div>;
  }

  const layers = [
    new TextLayer({
      id: "text-layer",
      data: [
        {
          position: [-82.55402, 35.60095],
          text: "Hello there - this should render during export",
        },
      ],
      pickable: true,
      getPosition: (d) => d.position,
      getText: (d) => d.text,
      getSize: 32,
      getAngle: 0,
      getTextAnchor: "middle",
      getAlignmentBaseline: "center",
    }),
  ];

  return (
    <DeckGL
      initialViewState={initialMapViewState}
      controller={{
        doubleClickZoom: true,
        scrollZoom: true,
      }}
      layers={layers}
    >
      <Map
        reuseMaps
        mapboxAccessToken={sigmaConfig.mapboxAccessToken}
        mapStyle="mapbox://styles/mapbox/standard"
      />
    </DeckGL>
  );
};

export default MinimalPlugin;
