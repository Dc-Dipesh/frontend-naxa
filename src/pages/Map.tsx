import React, { useEffect } from "react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "leaflet.vectorgrid"

//eslint-disable-next-line
const VectorTileLayer = ({ url, layerName, style }: any) => {
  const map = useMap()

  useEffect(() => {
    // es lint-disable-next-line
    const vectorTileLayer = L?.vectorGrid?.protobuf(url, {
      vectorTileLayerStyles: {
        [layerName]: style,
        
      },
    })

    vectorTileLayer.addTo(map)

    return () => {
      map.removeLayer(vectorTileLayer)
    }
  }, [map, url, layerName, style])

  return null
}

const MapComponent: React.FC = () => {
  const [currentLayer, setCurrentLayer] = React.useState<
    "province" | "district" | "municipality"
  >("province")

  const layerUrls = {
    province:
      "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}",
    district:
      "https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}",
    municipality:
      "https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}",
  }

  const layerStyles = {
    province: {
      weight: 2,
      color: "#ff0000",
      fillColor: "#ff0000",
      fillOpacity: 0.2,
    },
    district: {
      weight: 2,
      color: "#00ff00",
      fillColor: "#00ff00",
      fillOpacity: 0.2,
    },
    municipality: {
      weight: 2,
      color: "#0000ff",
      fillColor: "#0000ff",
      fillOpacity: 0.2,
    },
  }

  return (
    <div className="pt-32 container mx-auto">
      <div>
        <select
        className="p-2 rounded-md bg-gray-100"
          value={currentLayer}
          onChange={(e) =>
            setCurrentLayer(
              e.target.value as "province" | "district" | "municipality"
            )
          }
        >
          <option value="province">Province</option>
          <option value="district">District</option>
          <option value="municipality">Municipality</option>
        </select>
      </div>
      <MapContainer
        center={[28.3949, 84.124]} // Center of Nepal
        zoom={7}

        className="mt-5 w-full h-[80vh]" 
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {currentLayer === "province" && (
          <VectorTileLayer
            url={layerUrls.province}
            layerName="province"
            style={layerStyles.province}
          />
        )}
        {currentLayer === "district" && (
          <VectorTileLayer
            url={layerUrls.district}
            layerName="district"
            style={layerStyles.district}
          />
        )}
        {currentLayer === "municipality" && (
          <VectorTileLayer
            url={layerUrls.municipality}
            layerName="municipality"
            style={layerStyles.municipality}
          />
        )}
      </MapContainer>
    </div>
  )
}

export default MapComponent
