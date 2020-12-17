import React from "react";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Philosophy</h2>
            <h4 className="font-size-subheader mb-4">
              Atelier Leyla’s vision is to create products that will not be detrimental to the
              environment and provide an alternative to fast fashion! Our mission is to create
              timeless garments that are both ethically and sustainably made using recycled and
              organic fabrics.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">How do we achieve this?</h3>
            <h4 className="font-size-subheader mb-4">
              - Timeless designs and durable fabrics for longevity is key element of our design
            </h4>
            <h4 className="font-size-subheader mb-4">
              - Neutral colour palette and high quality fabrics We source the most sustainable,
            </h4>
            <h4 className="font-size-subheader mb-4">
              - renewable, biodegradable that are available No mass production, minimal inventory
            </h4>
            <h4 className="font-size-subheader mb-4">- Made-to-order to reduce waste</h4>
            <h4 className="font-size-subheader mb-4">
              - slow fashion Packaging is biodegradable and recyclable
            </h4>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
