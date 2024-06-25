import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapCard } from '../components/cards';
import { Button1,Button2 } from '../components/button';
import Lottie from 'react-lottie';
import animationMarker from '../assets/animation/marker.json';

const SetMapPage = () => {


  
 
  
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const lottieRef = useRef(null);
  const [showBottom,setBottomSheet] = useState(true);
  

  const defaultOptions = {
    animationData: animationMarker,
    autoplay: false, // Prevent autoplay
    loop:false,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  

  const CenterStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };


  

  useEffect(() => {
    const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN || 'NA';

    var centerLat = 9.755569056998596;
    var centerLng = 118.7480596523905;


    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [centerLng, centerLat],
      zoom: 15,
      accessToken: mapboxToken,
    });

    mapRef.current = map;


     // Detect scroll on the map
    const detectScroll = () => {
      setBottomSheet(false);
      if (lottieRef.current) {
        lottieRef.current.anim.goToAndStop(8, true); 
      }
    };

    const handleScrollEnd = () => {
      setBottomSheet(true);
      const set = map.getCenter();
      centerLat = set.lat;
      centerLng = set.lng;
      
      if (lottieRef.current) {
        lottieRef.current.anim.goToAndStop(58, true); 
      }
      console.log(set);
     
    };

    map.on('move', detectScroll);
    map.on('moveend', handleScrollEnd);


    // Change map style based on state
    map.on('style.load', () => {
      const newStyle = "mapbox://styles/mapbox/streets-v12";
      map.setStyle(newStyle);
    });

    
    const removeWatermark = () => {
      const mapboxWatermark = document.querySelector('.mapboxgl-control-container');
      if (mapboxWatermark) {
        mapboxWatermark.remove();
      }
      const mapboxAttribution = document.querySelector('.mapboxgl-control-container');
      if (mapboxAttribution) {
        mapboxAttribution.remove();
      }
    };

    map.on('load', () => {
      removeWatermark();
    });

  }, []);

  return (
    <div className='relative'>



      <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />

      
      
      <div style={CenterStyle}>
      <Lottie 
      ref={lottieRef}
	    options={defaultOptions}
        height={70}
        width={70}
      />
    </div>
    
{
  showBottom && (
    <div className='bg-white border-t rounded-t-3xl border-gray-200 absolute z-40 w-full h-56 bottom-0'>
    <div className='p-2.5'>
   <MapCard location="San Manuel, Villa Manuel, Puerto Princesa, Palawan 5300" />
    <div>
     <Button1 text="Save Address" />
     <Button2 text="Close" />
    </div>
    </div>
   </div>
  )
}
     
    </div>
  );
};

export default SetMapPage;
