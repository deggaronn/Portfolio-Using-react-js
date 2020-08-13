import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.Tech Computer Science and Engineering" where="Lovely Professional University" from="2017" to="Present"/>
</div>
)
}
}
export default Education