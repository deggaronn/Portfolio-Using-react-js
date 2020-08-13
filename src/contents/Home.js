import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/SHIN.png';
import Social from '../components/Social'
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" alt="profile"></img>
<ReactTypingEffect className="typingeffect" text={['I am Abhishek','I am a front end web developer']} speed={100} eraseDelay={700}/>
<Social />
</div>
)
}
}
export default Home