import PageTemplate from '../PageTemplate'
import TitleBar from '../components/TitleBar'

export default function About() {
   return (
      <PageTemplate>

         <TitleBar title="About Us" />

         <section className="bgwhite p-t-66 p-b-38">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 p-b-30">
                     <div className="hov-img-zoom">
                        <img src="images/banner-14.jpg" alt="IMG-ABOUT"/>
                     </div>
                  </div>
                  <div className="col-md-8 p-b-30">
                     <h3 className="m-text26 p-t-15 p-b-16">
                        Our story
                     </h3>
                     <p className="p-b-28">
                        Hello! I'm thrilled to have the opportunity to introduce myself. I'm Morgan, AKA Moogle. I am a mother to four wonderful children and three adorable cats. In 2019, my family and I made the exciting decision to relocate from the United States to the South Coast of England. Our move was driven by a desire to be closer to my husband's family and create stronger connections with our loved ones. Little did we know that our relocation would coincide with the emergence of the COVID-19 pandemic, presenting us with unforeseen challenges.
                     </p>
                     <p className="p-b-28">
Despite the circumstances, I embraced the opportunity to pursue my passion for crafting and discovered solace and joy in creating beautiful and useful items. Sewing became my creative outlet in 2022 when I started with small coin bags. As I progressed, I found delight in sewing adorable clothes for little girls. Intrigued by the world of quilting, I decided to venture into this new territory, honing my skills through trial and error as well as lots of phone calls home.
                     </p>
                     <p className="p-b-28">
Eventually, I mustered the courage to take on the challenge of making bags, diving into the art of bag making. Armed with determination, I relied on YouTube tutorials to guide me and learned from my mistakes along the way. What captivates me about bag making is the endless scope for creativity. Each component, from fabric to D-rings, plays a significant role in making each bag unique and visually stunning.
                     </p>
                     <p className="p-b-28">
Crafting bags has become a true passion of mine. I revel in the process of selecting fabrics, exploring color combinations, textures, and patterns, and bringing them together to create elegant and functional accessories. Witnessing a collection of fabric pieces transform into a practical and aesthetically pleasing bag fills me with immense satisfaction.
                     </p>
                     <p className="p-b-28">
In my creations, I strive to infuse a sense of elegance, functionality, and individuality. Each bag I make is crafted with love and meticulous attention to detail, reflecting the unique personality and style of its owner. It brings me great joy to deliver items that not only serve their purpose but also bring happiness and fulfillment to those who use them.
                     </p>
                     <p className="p-b-28">
While crafting is a significant part of my life, my family remains at the center of my universe. They inspire, support, and motivate me to pursue my dreams. Their presence reminds me daily of the beauty and precious moments life has to offer, and I am grateful for their unwavering support.
                     </p>
                     <p className="p-b-28">
Thank you for taking the time to learn a little bit about me and my creative journey. I look forward to sharing my passion with you and creating beautiful pieces that bring joy and inspiration to your life.
                     </p>
                     <div className="bo13 p-l-29 m-l-9 p-b-10">
                        <p className="p-b-11">
                           Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <span className="s-text7">
                           - Steve Jobs
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>


      </PageTemplate>
   );
}