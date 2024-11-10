import Social from "../../Social";

const ModalThree = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        {/* <div className="image">
          <img src="/img/thumbs/4-3.jpg" alt="tumb" />
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/8.jpg)", // Change image if needed
            }}
          ></div>
        </div> */}
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>AutoValuePro</h3> {/* Change title if needed */}
          <span>Vehicle Valuation Wizard</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
            AutoValuePro is a web application designed to provide accurate car valuations using machine learning algorithms. Built with a focus on efficiency and user engagement, it achieves a 90% accuracy rate across a dataset of over 1,000 vehicles.
            </p>
            <p>
            The platform allows users to generate detailed valuation reports 30% faster than traditional methods, enhancing operational efficiency by 20%. AutoValuePro's user-friendly interface and reliable predictions have made it a go-to tool for vehicle pricing, helping users make informed decisions effortlessly.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>Artifical Intelligence</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span> December , 2023</span> {/* Change date if needed */}
              </li>
              <li className="flex items-center gap-2">
                <span className="first">Source Code</span>
                <a href="https://github.com/hitaarthh/Auto-Value-Pro" target="_blank" rel="noreferrer">
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

export default ModalThree;
