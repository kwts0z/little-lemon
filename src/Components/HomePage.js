import './Styles/HomePage.css';
import logo from '../Assets/marioandyou.jpg';
import Card from './Card.js';
import salad from '../Assets/greek salad.jpg';
import dessert from '../Assets/lemon dessert.jpg';
import food from '../Assets/restauranfood.jpg';
import TestimonialCard from './TestimonialCard';
import prof1 from '../Assets/prof1.jpg';
import prof2 from '../Assets/prof2.jpg';
import prof3 from '../Assets/prof3.png';
import prof4 from '../Assets/prof4.jpg';
import restaurant from '../Assets/restaurant.jpg';
import chef from '../Assets/chef.jpg';

function HomePage(){
  return(
    <>
      <div className="hero-section">
        <div className="info-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Magna adipisicing adipisicing nulla nostrud fugiat. Occaecat nulla reprehenderit sit labore pariatur proident elit nisi do nulla. Mollit deserunt consectetur labore veniam qui enim nostrud culpa do.</p>
          <button>About Us</button>
        </div>
        <img src={logo} alt='Little Lemon Logo'></img>
      </div>

      <div className="highlight-section">
        <div className='specials'>
          <h1>Specials</h1>
          <button>Online menu</button>
        </div>
        <div className='card-section'>
          <Card img={salad}
                alt="Image of a Greek Salad"
                title="Greek Salad"
                info="Experience the essence of Greece with our fresh Greek salad, a delightful blend of crisp vegetables, tangy feta cheese, and zesty Mediterranean flavors.">
          </Card>
          <Card img={dessert}
                alt="Image of a lemon dessert"
                title="Lemon Dessert"
                info="Savor the tangy delight of our irresistible lemon dessert, a perfect harmony of citrusy zest and sweet indulgence.">
          </Card>
          <Card img={food}
                alt="Image of a gourmet sandwitch"
                title="Gourmet Sandwitch"
                info="Delight in our gourmet sandwich, a symphony of premium ingredients, artfully layered for an exceptional taste experience.">
          </Card>
        </div>
      </div>

      <div className="testimonials-section">
        <h1>Testimonials</h1>
        <div className="testimonial-cards">
          <TestimonialCard profImage={prof1}
                           name="Joseph"
                           comment="Very nice place.">
          </TestimonialCard>
          <TestimonialCard profImage={prof2}
                           name="Nick"
                           comment="Best food in town.">
          </TestimonialCard>
          <TestimonialCard profImage={prof3}
                           name="Angela"
                           comment="Outstanding restaurant, impeccable in every way.">
          </TestimonialCard>
          <TestimonialCard profImage={prof4}
                           name="Sarah"
                           comment="The restaurant exceeded all expectations, impeccable service, exquisite flavors, and a truly memorable dining experience.">
          </TestimonialCard>
        </div>
      </div>

      <div className="about-section">
        <div className='about'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <div className='paragraphs'>
            <p>Welcome to The Little Lemon, an inviting culinary destination in the heart of Chicago. We celebrate the tangy and refreshing flavors of lemons, infusing them into a diverse range of dishes. Our talented chefs artfully craft zesty appetizers, mouthwatering entrees, and irresistible desserts, creating a harmonious balance of flavors that showcase the versatility of lemons.</p>
            <p>Step into our charming space, where a cozy ambiance and attentive service await. Whether you're seeking an intimate dinner, a leisurely lunch, or a cheerful brunch gathering, The Little Lemon is the perfect place to satisfy your cravings for citrus-infused culinary delights. Indulge in our thoughtfully crafted menu, featuring locally sourced ingredients of the highest quality. Join us and embark on a delightful culinary adventure, leaving you craving more of our zestful creations.</p>
          </div>
        </div>
        <div className='about-images'>
          <img class="img1" src={restaurant} alt='restaurant'></img>
          <img class="img2" src={chef} alt='chef'></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;