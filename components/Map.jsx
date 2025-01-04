const Map = () => {
  return (
    <div className="map_wrap">
      <div className="map" style={{ height: "400px" }}>
        {
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51537690093!2d80.25581112278523!3d26.447149974079892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1735976264426!5m2!1sen!2sin" allowFullScreen=""
        loading="lazy"
        >/</iframe>}
      </div>
    </div>
  );
};

export default Map;


