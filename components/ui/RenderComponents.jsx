import Banner from "../ui/Banner";
import Card from "../ui/Card";
import Testimonial from "./Testimonial";
import Jumbotron from "../ui/Jumbotron";
function RenderComponents({ pageComponents }) {
  return (
    <div>
      {pageComponents.map((component, key) => {
        if (component.hero_banner) {
          return <Banner key={key} banner={component.hero_banner} />;
        } else if (component.testimonial) {
          return <Testimonial key={key} testimonial={component.testimonial} />;
        } else if (component.jumbotron) {
          return <Jumbotron key={key} jumbotron={component.jumbotron} />;
        } else if (component.feature_section) {
          return <Card key={key} featureSection={component.feature_section} />;
        }
      })}
    </div>
  );
}

export default RenderComponents;
