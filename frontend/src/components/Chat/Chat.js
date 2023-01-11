import React, { useState } from 'react'
import axios from 'axios';
import { Input } from '../../blocks/Form';
import { useEffect } from 'react';
import Button from '../../blocks/Button';
import { useInput } from '../../hooks';
import csrfFetch from '../../store/csrf';

const tokenApp = window.sessionStorage.getItem('X-CSRF-Token');


const Chat = () => {
  const [response, setResponse] = useState();
  const [prompt, promptChange] = useInput('');

  const handleInput = async (e) => {
    e.preventDefault()
    console.log('tokenApp');
    console.log(tokenApp);


  const res = await csrfFetch('/api/chat', {
    method: "POST",
    body: {prompt: prompt}
  })

  if (res.ok) {
    console.log('res');
    console.log(res.body);
    const data = await res.json()
    console.log('data');
    console.log(data);
  }
  // axios.post('/api/chat', prompt, {
    //     withCredentials: true,
    //     xsrfHeaderName: 'X-XSRF-TOKEN',
    //     headers: {
    //       Bearer: `${tokenApp}`,
    //       "Content-Type": "multipart/form-data"
    //     },
    //     // prompt: prompt})
    //     })
    //   .then((response) => {
    //     setResponse(response.data.output);
    //   });
  }


  console.log('response');
  console.log(response);
  return (
    <div>
    <form>
      <Input label=""
            className="prompt"
            type="text"
            value={prompt}
            onChange={promptChange}
      />

      <Button className="btn draft" label="draft"
        type="submit"
        onClick={handleInput}
      />
    </form>
      <div>
        {response}
      </div>
    </div>
  )
}

export default Chat