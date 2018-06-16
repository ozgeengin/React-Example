import React from 'react';

class Postlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/posts',)
        .then(results=>{return results.json();})
        .then(data=>{
          this.setState({posts:data});
        })
  }
  render() {
    return (
         <ul>
          {this.state.posts && this.state.posts.map((x)=>{
            return <li key={x.id}> {x.title}</li>;
          })}
        </ul>
      
    );
  }
}

export default Postlist;
