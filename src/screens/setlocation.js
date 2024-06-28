import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapCard } from '../components/cards';
import { Button1,Button2 } from '../components/button';
import Lottie from 'react-lottie';
import animationMarker from '../assets/animation/marker.json';
//import { useNavigate } from 'react-router-dom';






const SetMapPage = () => {
 // const navigate = useNavigate();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const lottieRef = useRef(null);
  const [showBottom,setBottomSheet] = useState(true);
  const [fromApp,setMessage] = useState("Loading");
  
  var centerLat = 9.755569056998596;
  var centerLng = 118.7480596523905;


  const closeScreen = () => {
     var AppMessage = {
        type: "GO_BACK",
        path: "home"
    };
    var messageString = JSON.stringify(AppMessage);
    window.ReactNativeWebView.postMessage(messageString);
  }
  
  const getLoc = () =>{
       var AppMessage = {
        type: "GO_LOCATION",
        path: "home"
    };
    var messageString = JSON.stringify(AppMessage);
    window.ReactNativeWebView.postMessage(messageString);
  }
  

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

    
// var centerLat = 9.755569056998596;
//   var centerLng = 118.7480596523905;

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
        setMessage("Please wait");
      setBottomSheet(false);
      if (lottieRef.current) {
        lottieRef.current.anim.goToAndStop(8, true); 
      }
    };


    async function getAddressFromCoordinates(lat, lng) {
      const accessToken = mapboxToken;
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          return data.features[0].place_name;
        } else {
          throw new Error('No address found');
        }
      } catch (error) {
        console.error('Error fetching address:', error);
        return null;
      }
    }



    const handleScrollEnd = async () => {
      setBottomSheet(true);
      const set = map.getCenter();
      centerLat = set.lat;
      centerLng = set.lng;
      getAddressFromCoordinates(centerLat, centerLng).then(address => {
        setMessage(address);
      });
      if (lottieRef.current) {
        lottieRef.current.anim.goToAndStop(58, true); 
      }
      
     
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

  }, [centerLat,centerLng]);


useEffect(() => {
    
     const handleCustomMessage = (event) => {

      // Check the type of the message
      if (event.detail.type === 'geo') {
        var nativeLocation = JSON.stringify(event.detail.data);
                // Parse the JSON string
        const parsedData = JSON.parse(nativeLocation );
        
        // Access latitude and longitude
        const latitude = parsedData.latitude;
        const longitude = parsedData.longitude;
        
        centerLat = latitude;
        centerLng = longitude;
        
           // Smooth camera animation
            mapRef.current.flyTo({
              center: [centerLng, centerLat],
              zoom: 15,
              speed: 1.2, // make the flying slow (1 is default, higher is faster)
              curve: 1, // change the speed at which it zooms out
              easing: function (t) {
                return t * (2 - t); // easeOutQuint-like easing function
              }
            });
            
            
      }
    };

    window.addEventListener('customMessage', handleCustomMessage);

    return () => {
      getLoc();
      window.removeEventListener('customMessage', handleCustomMessage);
    };
  
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
    <div className='select-none bg-white border-t rounded-t-3xl border-gray-200 absolute z-40 w-full h-56 bottom-0'>
    <div className='p-2.5'>
   <MapCard location={fromApp} />
    <div>
     <Button1 click={getLoc} text="Save Address" />
     
     <Button2 click={closeScreen} text="Close" />
    </div>
    </div>
   </div>
  )
}
     
    </div>
  );
};

export default SetMapPage;
