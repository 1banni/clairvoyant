import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from './Button'

const TopicButton = ({containername, textname, className, topic}) => {
  containername ||= 'btn-ctnr topic';
  className ||= 'btn topic';
  textname ||= 'btn-text topic';

  const history = useHistory();
  const goToTopic = () => history.push(`/search/${topic}`);

  return (
    <Button className={className}
            containername={containername}
            label={topic}
            onClick={goToTopic} />
  )
}

export default TopicButton