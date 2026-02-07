import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/neverneel')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-3xl text-white p-4'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export default Github
