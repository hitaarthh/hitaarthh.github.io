import Social from "../../Social";

const ModalTwo = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        {/* <div className="image">
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/navig.jpeg)",
            }}
          ></div>
        </div> */}
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>NaviG</h3>
          <span>Seamless Wayfinding App</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
            The NaviG app is a seamless wayfinding solution developed specifically for Vidyut 2023, designed to enhance navigation across large event venues. This mobile application integrates an interactive campus map, allowing participants to locate venues for over 50+ events with ease. By offering real-time directions and event reminders, NaviG ensures that users have a smooth and organized experience, making it particularly helpful for large gatherings with multiple simultaneous activities.
            </p>
            <p>
            Available on the Play Store, NaviG has proven its effectiveness in managing high attendee engagement, helping over 3,000 participants navigate effortlessly. The app combines user-centric design with essential functionality, providing quick access to event schedules and alerts, making it an essential tool for event organizers and attendees alike. 
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>App Development</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>October, 2023</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="first">Available At</span>
                <a href="https://play.google.com/store/apps/details?id=in.tech.sujith.navig&pli=1" target="_blank" rel="noreferrer">
                  <img
                    className="svg"
                    src="/img/svg/social/playstore.svg"
                    alt="playstore svg"
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

export default ModalTwo;
