function InstagramRoll() {

  const response = [
    {
      media_url: "https://scontent-lhr8-2.cdninstagram.com/v/t51.36329-15/358191539_959141845344353_730893717117734065_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=c413pJP8zv0AX-RG_WZ&_nc_ht=scontent-lhr8-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfDFRQ1nI3M8XNgLbNUWp0BkhxKmvM4C_z7bYJaPzLb8zQ&oe=64AE1B13",
      caption: "Let's Talk Bags!\n\nWhat will fit in my Erica Bowler Bag? What will fit in the Retro Style Sling bag?\n\nWhat will I sell? When will I sell? Website Vs Etsy? Or am I just rambling?!? We will know soon!! I said a rough opening month! Let's see if I can do it!!\n\nPlease let me know if you  have advice for me! I'm so excited for the future and I am hoping to soar.",
      permalink: "https://www.instagram.com/tv/CuHhjD8Kjwy/"
    },
    {
      media_url: "https://scontent-lcy1-2.cdninstagram.com/v/t51.29350-15/357393160_256155490481128_3096898053072826301_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=pabSQlmnu_oAX9uF0__&_nc_ht=scontent-lcy1-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfArenLDm3jJhWg0X8iK_OsWq683FJAb2m1OOkfDeu_2_Q&oe=64AA5BA4",
      caption: "Large Medium and Small sizes!\n\nI'm seriously loving making these! They would be so useful as hygiene bags! Just use WRC for the lining!!",
      permalink: "https://www.instagram.com/p/CuM9NkXq4Pt/"
    },
    {
      media_url: "https://scontent-lcy1-2.cdninstagram.com/v/t51.29350-15/355669628_287288177097478_3580700821011569660_n.heic?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=gWO1x_oGRW0AX9EqIQY&_nc_ht=scontent-lcy1-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfAbO44mqfVdK_IDPs1fdcEKg4OZBzr9QGUUjvqQez-dkA&oe=64A9CCB9",
      caption: "I just wanted to toot my own horn for a moment. This is a new Personal Best. I took a break from archery for a while and I'm happy to be back. Even if I have to force myself some days to go.\n\nNot only is this a new PB for me but also a new badge!!!! I'm so excited for my upcoming in-house competition!",
      permalink: "https://www.instagram.com/p/Ct2SMiqKnGa/"
    },
    {
      media_url: "https://scontent-lcy1-2.cdninstagram.com/v/t51.29350-15/349465775_6105712292882264_1266055754567033056_n.webp?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=PQEY2DrAplkAX_p0T2C&_nc_ht=scontent-lcy1-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCYvZqUDF1yffWV4LjMHujB9uD_1WMr_q60iN48TEMZhQ&oe=64AA3F06",
      caption: "He is just too cute not to share! 😍\n\n#robot #robotquilt #sewingproject #scrapyquilt #quiltsofinstagram",
      permalink: "https://www.instagram.com/p/CszekcNKuTA/"
    },
    {
      media_url: "https://scontent-lcy1-2.cdninstagram.com/v/t51.29350-15/341920337_1414093259338072_4427054346460712743_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qKkbGYXOOxcAX9pnznC&_nc_ht=scontent-lcy1-2.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCLjt2oGAFU_6nHum9NtMgwJwhK5hir4psC-yfJnjfIWg&oe=64AA5254",
      caption: "Creative Juices Flowing!!!! 🥰🥰🥰",
      permalink: "https://www.instagram.com/p/CrLrHM4qjB5/"
    },
  ];

  return (
    <>

      <section className="instagram p-t-20">
        <div className="sec-title p-b-52 p-l-15 p-r-15">
          <h3 className="m-text5 t-center">
            @ follow us on Instagram
          </h3>
        </div>
        <div className="flex-w">

          <InstagramTile media={response[0]} />
          <InstagramTile media={response[1]} />
          <InstagramTile media={response[2]} />
          <InstagramTile media={response[3]} />
          <InstagramTile media={response[4]} />

        </div>
      </section>

    </>
  )
}

function InstagramTile(props) {
   return (
      <div className="block4 wrap-pic-w">
        <img src={props.media.media_url} alt="IMG-INSTAGRAM" />
          <a href={props.media.permalink} target="_blank" className="block4-overlay sizefull ab-t-l trans-0-4">
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
