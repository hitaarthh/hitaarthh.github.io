const { default: Image } = require("next/image");

module.exports = [
  {
    id: 1,
    title: "The Sky and Serenity",
    img: "/img/news/sky.jpeg",
    date: "September 2023",
    descriptions: (
      <>
        <div className="descriptions">
          <p className="bigger">
          Just because life leads us on paths we hadn’t planned, doesn’t mean we can’t find beauty in the unexpected. My journey to the Coimbatore campus was an unanticipated delight, a destination that reminded me how life’s most beautiful moments often surprise us. Here, nestled in lush greenery and surrounded by hilly landscapes, I found a blend of learning, exploration, and inspiration.
          </p>
          <p>
          The rolling hills, vibrant flora, and serene surroundings created a tranquil atmosphere, making the campus itself a breathtaking sight. These moments, captured in this gallery, serve as cherished memories of the enriching experiences and wonderful people I encountered. This detour in Coimbatore left an indelible mark on my heart—a testament to the serendipitous beauty life reveals when we least expect it.
          </p>
          <div className="quotebox">
            <div className="icon">
              <Image
                width={56}
                height={50}
                className="svg"
                src="/img/svg/quote.svg"
                alt="tumb"
              />
            </div>
            <p>
              Most photographers find it hard to see interesting pictures in
              places in which they are most familiar. A trip somewhere new seems
              always exactly what our photography needed, as shooting away from
              home consistently inspires us to new artistic heights.
            </p>
          </div>
          {/* END QUOTEBOX */}

          <p>
            The trick here is to look slowly, and then look again. Take the time
            to look in detail and to look at the same thing from different
            angles, with different light, long lenses and wide lenses. Then move
            to the left a bit. You may never feel the need to leave the house
            again.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "teamBi0s at Nullcon 2022",
    img: "/img/news/bi0s.jpeg",
    date: "September 2022",
    descriptions: (
      <>
        <div className="descriptions">
          <p className="bigger">
          Nullcon, an annual security event on the sun-kissed shores of Goa, India, epitomizes the forefront of offensive and defensive tech. At the Hardwear CTF 2022, held at the luxurious Grand Hyatt Goa, I had the privilege of competing with Team Bi0s. After relentless days of strategic problem-solving and technical challenges, we emerged as the first runners-up—a moment of pride and accomplishment.
          </p>
          <p>
          In the buzzing halls of Nullcon, each intense conversation and technical breakthrough was a moment frozen in time—a rare glimpse into the heart of cybersecurity. Beyond the usual hustle of digital competition, there were deeper realizations about the art of cyber defense, moments that defined the true spirit of exploration and resilience.
          </p>
          <div className="quotebox">
            <div className="icon">
              <Image
                width={56}
                height={50}
                className="svg"
                src="/img/svg/quote.svg"
                alt="tumb"
              />
            </div>
            <p>
            Sometimes, it’s stepping into unfamiliar territory that reveals the hidden layers of our craft. In new environments, we find not just challenges, but inspiration that propels us to explore deeper and reach new heights.
            </p>
          </div>
          {/* END QUOTEBOX */}

          <p>
          The key here was to embrace each challenge with patience, dissecting every line of code and strategy from multiple angles. Approach every problem with a fresh perspective, delve into the layers with curiosity, and let each discovery drive you further. In such an environment, growth is not just inevitable—it’s exhilarating.
          </p>
        </div>
      </>
    ),
  },
];
