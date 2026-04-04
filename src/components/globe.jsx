import ReactGlobe from 'react-globe.gl';

export const Globe = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <ReactGlobe
        height={900}
        width={600}
        backgroundColor="rgba(0, 1, 1, 2)"
        backgroundImageOpacity={0.4}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[{
          lat: 40, 
          lng: -100, 
          text: "I'm here!", 
          color: 'white', 
          size: 20,
        }]}
      />
    </div>
  );
};

export default Globe;