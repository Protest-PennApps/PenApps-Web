import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import Popup from "./Popup";
import "./Map.css";
import pin from './logo2.png';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//import Marker from './components/Marker';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const bounds = [
  [-122.8197, 37.1149], // Southwest coordinates
  [-121.3217, 37.8534]  // Northeast coordinates
  ];

const Map = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.378955, 37.621313],
      zoom: 12,
      maxBounds: bounds

    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  
    map.on('load', function () {
      map.addSource('places', {
          'type': 'geojson',
          'data': {
              'type': 'FeatureCollection',
              'features': [
                  {
                      'type': 'Feature',
                      'properties': {
                        "name": "March for Breonna Taylor",
                        "description": "Come out and march for Breonna at Town Hall. Protest No Knock Warrants."
                      
                      },
                      'geometry': {
                          'type': 'Point',
                          'coordinates': [-122.378955, 37.621313]
                      }
                  },
                  {
                    'type': 'Feature',
                    'properties': {
                      "name": "March for Breonna Taylor",
                      "description": "Come out and march for Breonna at Town Hall. Protest No Knock Warrants."
                    
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.378955, 37.721313]
                    }
                },
                {
                  'type': 'Feature',
                  'properties': {
                    "name": "March for Breonna Taylor",
                    "description": "Come out and march for Breonna at Town Hall. Protest No Knock Warrants."
                  
                  },
                  'geometry': {
                      'type': 'Point',
                      'coordinates': [-122.378955, 37.821313]
                  }
              },
                
              ]
          }
      });

    map.loadImage(
      pin,
      (error, image) => {
          if (error) throw error;
          map.addImage('pin', image);
      }
    );

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': 'pin',
            'icon-allow-overlap': true,
            'icon-size': 0.30
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', e => {
      if (e.features.length) {
        const feature = e.features[0];
        // create popup node
        let popupNode = document.createElement('div');
        //popupNode = document.createElement("img");
        //popupNode.src = "https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png";
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // set popup on map
        popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
      }
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
        },
          trackUserLocation: true
        })
    );

    const geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      flyTo: {
        bearing: 0,
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 1, // make the flying slow
        curve: 2, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
          easing: function (t) {
          return t;
          }
        },
      marker: false, // Do not use the default marker style
      placeholder: 'Enter Zip Code', // Placeholder text for the search bar
      bbox: [-122.8197, 37.1149, -121.3217, 37.8534], // Boundary for Berkeley
      proximity: {
        longitude: -122.378955,
        latitude: 37.621313
      } // Coordinates of UC Berkeley
    });
  
    // Add the geocoder to the map
    map.addControl(geocoder);

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });
});
    
    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;