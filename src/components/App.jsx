import React, { Component } from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="mw7 center">
          <header class="bg-white black-80 tc pv4 avenir">
            <img src={Logo} alt="The Local Food Project" class="w5 h5" />

            <h1 class="mt2 mb0 baskerville i fw1 f1">The Local Food Project</h1>
            <h2 class="mt2 mb0 f6 fw4 ttu tracked">Our amazing subtitle</h2>
            <nav class="bt bb tc mw7 center mt4">
              <Link
                class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
                to="/project/portfolio"
              >
                Login
              </Link>
              <Link
                class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l"
                to="/project/about"
              >
                About
              </Link>
              <Link
                class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                to="/project/asdf"
              >
                Producer Sign up
              </Link>

              <Link
                class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
                to="/project/shop"
              >
                Consumer Sign up
              </Link>

              <Link
                class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
                to="/project/contact"
              >
                Contact
              </Link>
            </nav>
          </header>

          <article className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">
                  Tech Giant Invests Huge Money to Build a Computer Out of
                  Science Fiction
                </h1>
                <p className="f5 f4-l lh-copy athelas">
                  The tech giant says it is ready to begin planning a quantum
                  computer, a powerful cpu machine that relies on subatomic
                  particles instead of transistors.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="http://mrmrs.github.io/photos/cpu.jpg"
                  className="db"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
            </div>
            <p className="f6 lh-copy gray mv0">
              By <span className="ttu">Robin Darnell</span>
            </p>
            <time className="f6 db gray">Nov. 21, 2016</time>
          </article>
          <article className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">
                  A whale takes up residence in a large body of water
                </h1>
                <p className="f5 f4-l lh-copy athelas">
                  This giant of a whale says it is ready to begin planning a new
                  swim later this afternoon. A powerful mammal that relies on
                  fish and plankton instead of hamburgers.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="http://mrmrs.github.io/photos/whale.jpg"
                  className="db"
                  alt="Photo of a whale's tale coming crashing out of the water."
                />
              </div>
            </div>
            <p className="f6 lh-copy gray mv0">
              By <span className="ttu">Katherine Grant</span>
            </p>
            <time className="f6 db gray">Nov. 19, 2016</time>
          </article>
          <article className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">
                  ‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found
                </h1>
                <p className="f5 f4-l lh-copy athelas">
                  Archaeologists have found more than 40 tons of vinyl records,
                  some more than a five years old, shedding light on early
                  hipster trends.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img
                  src="http://mrmrs.github.io/photos/warehouse.jpg"
                  className="db"
                  alt="Photo of a warehouse with stacked shelves."
                />
              </div>
            </div>
            <p className="f6 lh-copy gray mv0">
              By <span className="ttu">Imelda Clancy</span>
            </p>
            <time className="f6 db gray">Nov. 19, 2016</time>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
