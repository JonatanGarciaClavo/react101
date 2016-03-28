// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// require("../assets/font.css");



const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactLogo: require("../assets/reactLogo.svg"),
  facebookLogo: require("../assets/facebook-logo.png"),
  instagramLogo: require("../assets/instagram-logo.jpg"),
  lifecycle: require("../assets/react-lifecycle.png"),
  composition: require("../assets/composition.jpg")
};

preloader(images);

const reactColor = "#00D8FF";
const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00"
}, {
  primary: "labmedium",
  secundary: "montserratbold",
  tertiary: "montserratregular"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgColor}>
            <Image width="35%" src={images.reactLogo}/>
            <Heading fit caps textColor="primary">
              React 101
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Summary
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="primary">What is it React?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Virtual DOM</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">JSX</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Properties</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">State</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Lifecycle</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">Components composition</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              What is it React?
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <Appear><ListItem textFont="secundary" textColor="primary">2013 by Facebook</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">Large apps with data changes over time</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">V in MVC</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">Simple</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">Declarative</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">Composable Components</ListItem></Appear>
                  <Appear><ListItem textFont="secundary" textColor="primary">New render approach</ListItem></Appear>
                </List>
              </Fill>
              <Fit>
                <Image src={images.facebookLogo.replace("/", "")} height="250px"/>
                <Image src={images.instagramLogo.replace("/", "")} height="250px"/>
              </Fit>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              Virtual DOM
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="primary">JavaScript tree of React elements and components</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">ReactElement / ReactElement Factory</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">ReactNode</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">ReactComponent / ReactComponent Class</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="primary">DOM differences</ListItem></Appear>
            </List>
            <Link href="https://facebook.github.io/react/docs/glossary.html">
              <Text italic textFont="tertiary" textColor="white">React (Virtual) DOM Terminology</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              JSX
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="primary">Markup language</ListItem>
              <ListItem textFont="secundary" textColor="primary">Babel support</ListItem>
            </List>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/js.example")}
              margin="20px auto"
              textSize="0.55em"
            />
            <CodePane
              lang="jsx"
              source={require("raw!../assets/jsx.example")}
              margin="20px auto"
              textSize="0.75em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              Properties
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/props.example")}
              margin="20px auto"
              textSize="0.75em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              State
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/state.example")}
              margin="20px auto"
              textSize="0.5em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              Lifecycle
            </Heading>
            <Image src={images.lifecycle.replace("/", "")} height="550px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              Components composition
            </Heading>
            <Image src={images.composition.replace("/", "")} height="550px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={1} caps textColor="primary">
              Demo
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
           <Heading size={2} caps textColor="primary">
              Thanks
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
