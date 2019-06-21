import React from 'react'
import Comment from './Comment'
const exampleProp = [
  {
    imageSource: '//a.facdn.net/20190616/dragonighthawk.gif',
    commentText: 'cringy rp goes here',
    userName: 'user1'
  },
  {
    imageSource: '//a.facdn.net/1518896239/zanethefox.gif',
    commentText: 'hello World',
    userName: 'user2'
  }
]
const CommentContainer = props => (
  <div>
    {exampleProp.map((item, index) => {
      return <Comment {...item} />
    })}
  </div>
)
export default CommentContainer
