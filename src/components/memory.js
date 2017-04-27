import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteFirsts } from '../actions/firsts';

const moment = require('moment');

class Memory extends Component {

  deleteClickedMemory = () => {
    this.props.deleteFirsts(this.props._id);
  }

  render() {
    const { content, date, image, i, _id } = this.props;
    let side = 'leftMemory';
    if (i % 2 === 0) {
      side = 'rightMemory';
    }
    let imageTag;
    if (image.length > 0) {
      imageTag = <div className="memoryImageDiv"><img src={image} alt="" /></div>;
    }
    const birthday = this.props.birthday || '2015-06-07';
    const postDate = moment(date);
    const userBirthday = moment(birthday);
    const age =
      (postDate.diff(userBirthday, 'years', true) > 2) ?
        postDate.from(userBirthday, 'years') :
       `${postDate.diff(userBirthday, 'months')}`;
    let formattedAge = `${age} months`;
    if (age.length > 2) {
      formattedAge = age;
    }
    if (age == '1') {
      formattedAge = `${age} month`;
    }
    console.log(age);
    return (
      <div className={side} id={_id}>
        <div className="description">
          {imageTag}
          <p className="date">{date}</p>
        <p className="content"><span className="age">{formattedAge} </span>{content}</p>
        </div>
        <div className="deleteButton" onClick={this.deleteClickedMemory}>&times;</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    birthday: state.user.currentUserBirthday,
  }),
  { deleteFirsts },
)(Memory);

// for testing:
// Today was the first time he ever saw a caterpillar. He plopped right down on the bridge over the railroad and just stared at it. Teddy was intrigued as well!
// https://static.pexels.com/photos/39369/baby-teddy-bear-cute-39369.jpeg
// Having fun picking up toys!
// https://static.pexels.com/photos/315265/pexels-photo-315265.jpeg
// Getting ready for Santa! Someone didn't quite get the whole 'leave' cookies part.
// https://static.pexels.com/photos/247185/pexels-photo-247185.jpeg
// https://static.pexels.com/photos/47219/baby-child-newborn-arms-47219.jpeg

//
