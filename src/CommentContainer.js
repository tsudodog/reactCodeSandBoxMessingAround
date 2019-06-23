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
    commentText:
      'hello World lorem ipusm longer text\nhello World lorem ipusm longer texthello World lorem ipusm longer texthello World lorem ipusm longer texthello World lorem ipusm longer texthello World lorem ipusm longer texthello World lorem ipusm longer text',
    userName: 'SomeUser'
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
