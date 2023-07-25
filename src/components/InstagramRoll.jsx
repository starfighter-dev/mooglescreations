import React, { useState, useEffect } from 'react'; 
 
function InstagramRoll() {

  const [feed, setFeed] =  useState([]);
  
  useEffect(() => {
    fetch('https://api.starfighter.dev/moogle/instagram')
      .then(results => results.json())
      .then(data => {
        setFeed(data.results);
      });
  }, []);

  return (
    <>

      <section className="instagram p-t-20">
        <div className="sec-title p-b-52 p-l-15 p-r-15">
          <h3 className="m-text5 t-center">
            @ follow us on Instagram
          </h3>
        </div>
        <div className="flex-w">

        {feed.length > 0 &&
          <>
          <InstagramTile media={feed[0]} />
          <InstagramTile media={feed[1]} />
          <InstagramTile media={feed[2]} />
          <InstagramTile media={feed[3]} />
          <InstagramTile media={feed[4]} />
          </>
        }


        </div>
      </section>

    </>
  )
}

function InstagramTile(props) {
  console.log(props);
   return (
      <div className="block4 wrap-pic-w" style={{ backgroundColor: '#18A1DF'}}>
        <img src={props.media.thumbnail} alt="IMG-INSTAGRAM" />
          <a href={props.media.link} target="_blank" className="block4-overlay sizefull ab-t-l trans-0-4">
            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
              <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true"></i>
              <span className="p-t-2"></span>
            </span>
            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p className="s-text10 m-b-15 h-size1 of-hidden" style={{ whiteSpace: "pre-wrap"}}>
                {props.media.caption}
              </p>
            </div>
          </a>
      </div>
   );
}

export default InstagramRoll
