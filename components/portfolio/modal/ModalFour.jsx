import Social from "../../Social";

const ModalFour = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        {/* <div className="image">
          <img src="/img/thumbs/4-3.jpg" alt="tumb" />
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/9.jpg)", // Change image if needed
            }}
          ></div>
        </div> */}
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>Weather Monitoring With Rollups and Aggregates
          </h3> {/* Change title if needed */}
          <span>Uses OpenWeatherMap API</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
            This project focuses on real-time weather monitoring by integrating data from the OpenWeatherMap API, allowing users to track weather conditions in key metropolitan areas. It employs rollups and aggregates to summarize daily weather data, enabling an efficient and comprehensive overview of trends and variations in temperature, humidity, and other metrics. The system is designed to trigger alerts based on predefined thresholds, enhancing its utility for applications requiring timely weather updates.
            </p>
            <p>
            With its robust API fetch and display capabilities, the project offers a user-friendly interface for visualizing weather data, while supporting unit conversions and extensibility for future metrics like wind speed. This makes it a valuable tool for users seeking quick, detailed insights into weather trends across regions. 
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>API Integration & Data Visualization</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>September, 2022</span> {/* Change date if needed */}
              </li>
              <li className="flex items-center gap-2">
                <span className="first">Source Code</span>
                <a href="https://github.com/hitaarthh/Weather-Monitoring-with-Rollups-and-Aggregates" target="_blank" rel="noreferrer">
                  <img
                    className="svg"
                    src="/img/svg/social/github.svg"
                    alt="github"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* main_details */}
      </div>
    </div>
  );
};

export default ModalFour;
