import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button'

const TopicButton = ({topic}) => {
  const history = useHistory();

  const goToTopic = () => {
    history.push(`/${topic}`)
  }

  return (
    <div className="btn-ctnr topic rect">
      <Button className="btn topic rect"
              onClick={goToTopic}>
        <div className="btn-text topic rect">
          {topic}
        </div>
      </Button>
    </div>
  )
}

export default TopicButton