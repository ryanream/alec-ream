import React from 'react';

const Body = () => {
  return (
    <div className="body-container">
      {/* Section 1 */}
      <section className="body-intro">Here's a Headline.</section>
      <section className="section-container">
        <div className="section-title horizontal-title bg-gradient-orange-right">
          Section title over a beautiful gradient.
        </div>
        <div className="content-bubble bubble-left">
          Some content can live here. How about some placeholder text for now?{' '}
          <p />
          Gentrify farm-to-table pour-over art party, before they sold out
          bicycle rights readymade fashion axe mixtape. Gochujang subway tile
          viral lyft tote bag marfa neutra 8-bit wayfarers poutine. Pickled
          messenger bag try-hard flexitarian mustache austin enamel pin green
          juice bushwick gluten-free. Cloud bread aesthetic +1 ramps, keffiyeh
          cray yr raw denim ugh lomo tattooed scenester. IPhone yr pop-up
          pickled tousled tumeric kinfolk tofu organic vape craft beer poke.
          Bespoke coloring book yr mustache kombucha. <p />
          Kinfolk bushwick kickstarter +1 hexagon pinterest chambray food truck
          fixie fam meggings subway tile portland bicycle rights taxidermy.
          Succulents single-origin coffee +1 neutra affogato cloud bread narwhal
          skateboard mustache quinoa tumeric thundercats craft beer butcher
          offal. XOXO shoreditch cred drinking vinegar readymade celiac
          succulents. Ennui quinoa franzen truffaut palo santo post-ironic
          affogato sartorial pitchfork cliche succulents af you probably haven't
          heard of them.
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-container">
        <div className="section-title horizontal-title bg-gradient-orange-right"></div>
        <div className="content-bubble bubble-right"></div>
      </section>

      {/* Section 3 */}
      <section className="section-container" id="flex-row">
        <div className="section-title vertical-title bg-gradient-orange-top"></div>
        <div className="content-bubble bubble-horizontal"></div>
      </section>

      {/* Section 4 */}
      <section className="section-container">
        <div className="section-title square-title bg-gradient-orange-top"></div>
        <div className="content-bubble bubble-top-left"></div>
      </section>
    </div>
  );
};

export default Body;
