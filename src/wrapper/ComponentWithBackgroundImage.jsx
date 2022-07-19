const heroImg = "../images/hero/ipad-hand.png";

const sectionStyle = (imageName) => ({
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { imageName } + ")"
});

function ComponentWithBackgroundImage(component) {
  return (
    // <div style={sectionStyle(imageName)}>
    <div>
      {component}
    </div>
  )
}

export default ComponentWithBackgroundImage;