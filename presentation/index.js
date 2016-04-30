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
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";
// Import CodeSlide
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
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
              <Appear><ListItem textFont="secundary" textColor="primary">Events</ListItem></Appear>
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
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/props.example")}
            ranges={[
              { loc: [0, 15], title: "Properties"},
              { loc: [11, 15], title: "Properties", note: "Initialize your props"},
              { loc: [4, 6], title: "Properties", note: "Use props"}
            ]}
          />
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
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw!../assets/state.example")}
            ranges={[
              { loc: [1, 8], note: "Initialize your state"},
              { loc: [13, 18], note: "Use state"},
              { loc: [8, 13], note: "Set new state"}
            ]}
          />
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Events
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/events.example")}
              margin="20px auto"
              textSize="0.5em"
            />
            <Link href="https://facebook.github.io/react/docs/events.html">
              <Text italic textFont="tertiary" textColor="white">More info about events</Text>
            </Link>
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
            <Heading size={2} caps textColor="primary">
              Components composition
            </Heading>
            <Layout>
            <Fit>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/composition.example")}
              textSize="0.45em"
            />
            </Fit>
            <Fit>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/composition2.example")}
              textSize="0.45em"
            />
            </Fit>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Smart components
            </Heading>
            <List>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Are concerned with <S type="italic">how things work</S></ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">May contain both presentational and container components inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles</ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Provide the data and behavior to presentational or other container components</ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Call Flux actions and provide these as callbacks to dumb components</ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Are often stateful, as they tend to serve as data sources</ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Are usually generated using higher order components such as <S type="italic">connect() </S> from React Redux, <S type="italic">createContainer() </S> from Relay, or <S type="italic">Container.create() </S> from Flux Utils, rather than written by hand</ListItem>
              <ListItem textSize="0.9em" textFont="secundary" textColor="primary">Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Dumb components
            </Heading>
            <List>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Are concerned with <S type="italic">how things look</S></ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">May contain both presentational and container components inside, and usually have some DOM markup and styles of their own</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Have no dependencies on the rest of the app, such as Flux actions or stores</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Don’t specify how the data is loaded or mutated</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Receive data and callbacks exclusively via props</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Rarely have their own state (when they do, it’s UI state rather than data)</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Are written as functional components unless they need state, lifecycle hooks, or performance optimizations</ListItem>
              <ListItem textSize="1em" textFont="secundary" textColor="primary">Examples: Page, Sidebar, Story, UserInfo, List...</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Demo
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/demo.example")}
              textSize="0.75em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Exercise resolution
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/exercise-steps.example")}
              textSize="0.65em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={1} caps textColor="primary">
              Thanks
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/react101">
              <Text padding="100px 0 0 0" italic textFont="tertiary" textColor="white">Docs and examples: https://github.com/JonatanGarciaClavo/react101</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/react-todo-plain.git">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Exercise resolution: https://github.com/JonatanGarciaClavo/react-todo-plain.git</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
