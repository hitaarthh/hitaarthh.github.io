const Map = () => {
  return (
    <div className="map_wrap">
      <div className="map" style={{ height: "400px" }}>
        {
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6684482859255!2d76.48924447526615!3d9.093936990970038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0602e7b4a2049d%3A0x3af3246b5138db0f!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Amritapuri!5e0!3m2!1sen!2sin!4v1731162012310!5m2!1sen!2sin" allowFullScreen=""
        loading="lazy"
        >/</iframe>}
      </div>
    </div>
  );
};

export default Map;
