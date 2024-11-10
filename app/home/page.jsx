import Home from "@/components/home/Home";

import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title: "Home || Hitarth",
};
const index = () => {
  return (
    <>
      {/* En Seo Page Title */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Home />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
