import Portfolio from "@/components/portfolio/Portfolio";
import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title: "Portfolio || Hitarth",
};
const index = () => {
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_portfolio">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Projects</span>
                      <h3>Creative Projects</h3>
                    </div>
                  </div>
                </div>
                {/* END TOKYO_TM_TITLE */}

                <div className="portfolio_filter">
                  <Portfolio />
                </div>
                {/* END PROFTOLIO FILTER */}
              </div>
            </div>
            {/* End .container */}
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
