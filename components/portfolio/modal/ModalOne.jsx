import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        {/* <div className="image">
          <img src="/img/thumbs/4-3.jpg" alt="tumb" />
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/6.jpg)",
            }}
          ></div>
        </div> */}
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>Rule Engine With Ast</h3>
          <span>Details</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
              It is a dynamic solution for creating and managing complex business rules using Abstract Syntax Trees (AST). This approach allows users to build flexible and modular rule sets that can be easily modified, offering a clean separation between rule logic and application code. Designed for adaptability, this rule engine supports rapid updates, making it ideal for scenarios where business requirements frequently change.
            </p>
            <p>
              With AST-based parsing, real-time rule evaluation, and a user-friendly interface, this project is particularly useful for applications needing customizable business logic, real-time data validation, or alert thresholds. Built using Node.js, TypeScript, and Angular, it provides a powerful yet accessible tool for developers and businesses alike.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>Design & Algorithms</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>October, 2024</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="first">Source Code</span>
                <a href="https://github.com/hitaarthh/rule-engine-ast" target="_blank" rel="noreferrer">
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

export default ModalOne;
