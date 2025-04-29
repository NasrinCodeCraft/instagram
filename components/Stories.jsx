"use client"

import { faker } from '@faker-js/faker';
import { useState, useEffect } from "react"
import Story from "./Story"

function Stories() {

const [suggestions, setSuggestions] = useState([])

useEffect(()=>{
    const suggestions = [...Array(20)].map((_,i)=>({
        avatar: faker.image.avatar(),
        name: faker.name.firstName(),
        username: faker.internet.username(),
        phone: faker.phone.number(),
        company: faker.company.name(),
        email: faker.internet.email(),
        id: i,
    }))
    setSuggestions(suggestions)
},[])

  return (
    <div className='flex space-x-2 p-6 bg-white border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>    
        {suggestions.map((profile)=>(
            <Story key={profile.id} img={profile.avatar} username={profile.username}/>
        ))}
    </div>

  )
}

export default Stories