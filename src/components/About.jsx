const About = () => {
  return (
    <div className="content-region" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p>
        I'm Nevin McIntyre, a GIS professional living in the Spokane – Coeur d'Alene area. I have a strong background in deploying geospatial solutions for public agencies using the ESRI ecosystem and open-source tools like Python, GeoPandas, Leaflet, and QGIS.
      </p>
      <br />
      <p>
        Outside of work, I build web apps, contribute to open datasets, and publish spatial data visualizations. Many of these projects are educational in nature, but I strive to provide meaningful analysis. I'm also a board game enthusiast and guitarist.
        You can{" "}
        <a href="https://linkedin.com/in/nevinmcintyregis" target="_blank" rel="noopener noreferrer">
          view my resume on LinkedIn
        </a>{" "}
        and connect with me there.
      </p>

      <hr style={{ width: "30%", margin: "2rem auto" }} />

      <p style={{ textAlign: "center" }}>
        If you’ve found my work useful or inspiring and want to send a thank you, I’d be extremely grateful!{" "}
        <a
          href="https://www.paypal.com/donate?business=KHXQBXGW5D3Z8&no_recurring=0&item_name=Inspiring+and+useful+GIS%21&currency_code=USD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-donate fa-1x"></i> Donate via PayPal
        </a>
      </p>

      <figure style={{ textAlign: "center", marginTop: "2rem" }}>
        <img
          src="/images/Fam2.JPG"
          alt="My nieces, nephew, and Rajah"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
        <figcaption style={{ marginTop: "0.5rem" }}>My nieces, nephew, and Rajah</figcaption>
      </figure>
    </div>
  );
};

export default About;
