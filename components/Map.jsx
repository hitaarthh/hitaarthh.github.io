const Map = () => {
  return (
    <div className="map_wrap">
      <div className="map" style={{ height: "400px" }}>
        {
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914556.7365335459!2d79.58167559306452!3d26.440018472287544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47831a987bf3%3A0x53df4d42cef9f8d6!2sKanpur%20Nagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731072362174!5m2!1sen!2sin" allowFullScreen=""
        loading="lazy"
        >/</iframe>}
      </div>
    </div>
  );
};

export default Map;
