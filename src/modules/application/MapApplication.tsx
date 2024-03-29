import React, { useEffect, useMemo, useState } from "react";

import "./application.css";
import { MapView } from "../map/mapView";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import { KommuneLayerCheckbox } from "../kommune/kommuneLayerCheckBox";
import { Layer } from "ol/layer";
import { CenterOnUserLink } from "../map/centerOnUserLink";

useGeographic();

export function MapApplication() {
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);
  const map = useMemo(
    () =>
      new Map({
        view: new View({ center: [10, 60], zoom: 8 }),
      }),
    [],
  );
  useEffect(() => {
    map.setLayers(layers);
  }, [layers]);

  return (
    <>
      <header>
        <h1>Map Application</h1>
      </header>
      <nav>
        <CenterOnUserLink view={map.getView()} />
        <KommuneLayerCheckbox setLayers={setLayers} map={map} />
      </nav>
      <MapView map={map} />
    </>
  );
}
