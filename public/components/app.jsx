// var keycodes = require("./keycode.js");

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

var testData = {
  97: "../foley/beads.wav",
  98: "../foley/beltbuckle.wav",
  99: "../foley/footsteps.wav",
  100: "../foley/grendel.wav"
};

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.
var VKey = React.createClass ({
  getInitialState: function() {
    return {playing: false}
  },

  handleKeyPress: function(event) {
    if ("" + event.keyCode === "" + this.props.targetKey) {
      this.setState({playing: true})
      document.getElementById(this.props.targetKey).play();
      event.preventDefault();
    }
    this.render();
  },
  componentDidMount: function(event) {
    window.addEventListener('keypress', this.handleKeyPress);
  },
  render: function() {
    return (
      <div onKeyPress= { this.handleKeyPress }>
        <p> this is the {this.props.targetKey} div</p>
        <audio id={this.props.targetKey} src= { this.props.path }></audio>
      </div>
    )
  }
});

var App = React.createClass({
  // getInitialState:  function() {
  //   return {viewHTML: <div> no data to show </div>};
  // },
  //
  // //helper that given a path, modified a dom audio element with the given path
  // setCurrentSong: (path, cb) => {
  //   var audio = document.getElementById("mainAudio");
  //   //ajax call that actually returns file
  //   audio.src = path;
  //   if (cb) {
  //     cb();
  //   }
  // },

  //returns a div with a keypress listener, which will call setCurrentSong
  //on the provided path when the target key is pressed.

  // loadFile: () => {
  //   var vKey = (targetKeyCode, path) => (
  //       <div onKeyPress={function(event) {
  //           //add audio tag here?
  //           // if (event.keyCode === targetKeyCode) {
  //           //   this.setCurrentSong(path);
  //           // }
  //         }
  //       }>
  //       <audio src=""></audio>
  //       </div>
        ////
      // );
  //DO NOT DELETE!  This has been commented out for testing purposes but will
  //be necessary for communicating with the server.

  //   $.get({
  //   url: '/',
  //   dataType: 'json',
  //   error: function(err) {
  //     console.error(err);
  //   }.bind(this)
  // }).done(function(data) {
  //   var result = <div></div>;
  //   for (var code in data) {
  //     result.append(vKey(code, data[code]));
  //   }
  //   this.setState({viewHTML: result});
  //   this.render();
  // });
//   var data = testData;
//
//   var newData = [];
//
//   for (var code in data) {
//     newData.push(vKey(code, data[code]));
//   }
//
//   var result = (<div>
//
//     {
//       newData.map(function(element) {
//         return element;
//       })
//     }
//     </div>);
//   console.log(this);
//   this.setState({viewHTML: result});
//   // this.render();
// },

  render: function() {
    var data = [];
    for (var code in testData) {
      data.push({key: code,
        path: testData[code]
      });
    }
    return (
      <div>
      {
        data.map(function(keyBinding) {
          return <VKey targetKey={keyBinding.key} path={keyBinding.path} />
        })
      }
      </div>
    )
  }
})

ReactDOM.render(<div>
  <App/>
  </div>, document.getElementById('app')
);