import React from 'react'
import Comment from './Comment'
const exampleProp = [
  {
    imageSource: '//a.facdn.net/20190616/dragonighthawk.gif',
    commentText: 'cringy rp goes here'
  },
  {
    imageSource: '//a.facdn.net/1518896239/zanethefox.gif',
    commentText: 'hello World'
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
