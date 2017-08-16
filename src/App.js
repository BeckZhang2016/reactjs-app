import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Test, Toggle, Mailbox, Page, Numberlist, NameForm, EssayForm,
  FlavorForm, Reservation, Calculator, Greeting, CustomTextInput, CounterButton,
  WordAdder
} from './test/test';
import Clock from './test/Clock';
import {BasicExample, ParamsExample, AuthExample} from './Example/SimpleExample';
import {CustomLinkExample} from './Example/CustomLinkExample';
import PreventingTransitionsExample from './Example/PreventingTransitions';
import NoMatchExample from './Example/NotMatch404';
import RecursiveExample from './Example/RecursivePaths';
import SidebarExample from './Example/Sidebar';
import AnimationExample from './Example/AnimatedTransitions';
import AmbiguousExample from './Example/AmbiguousMatches';
import RouteConfigExample from './Example/RouteConfig';
import ModalGallery from './Example/ModalGallery';

/*class App extends Component {
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/!*<Test name="World"/>*!/}
          {/!*<Test name="Beck"/>*!/}
          {/!*<Test name="FFFF"/>*!/}
          {/!*<Clock date={new Date()}/>*!/}
          {/!*<Toggle />*!/}
          {/!*<Mailbox unreadMessages={messages}/>*!/}
          {/!*<Page/>*!/}
          {/!*<Numberlist numbers={numbers}/>*!/}
          {/!*<NameForm/>*!/}
          {/!*<EssayForm/>*!/}
          {/!*<FlavorForm/>*!/}
          {/!*<Reservation/>*!/}
          {/!*<Calculator/>*!/}
          {/!*<Greeting/>*!/}
          {/!*<CustomTextInput/>*!/}
          {/!*<CounterButton/>*!/}
          {/!*<WordAdder/>*!/}
        </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (
        <div>
          {/*<BasicExample/>*/}
          {/*<ParamsExample/>*/}
          {/*<AuthExample/>*/}
          {/*<CustomLinkExample/>*/}
          {/*<PreventingTransitionsExample/>*/}
          {/*<NoMatchExample/>*/}
          {/*<RecursiveExample/>*/}
          {/*<SidebarExample/>*/}
          {/*<AnimationExample/>*/}
          {/*<AmbiguousExample/>*/}
          {/*<RouteConfigExample/>*/}
          <ModalGallery/>
        </div>
    );
  }
}

export default App;
