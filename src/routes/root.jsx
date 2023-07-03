import PageTemplate from '../PageTemplate'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import InstagramRoll from '../components/InstagramRoll'

export default function Root() {
   return (
      <PageTemplate>
         <Hero />
         <FeaturedProducts />
         <InstagramRoll />
      </PageTemplate>
   );
}
