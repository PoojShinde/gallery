import React from 'react'


export default function ImageCard() {
    
    const titles = ["Temples","flowers","food","galaxy","forest","dove","love"]
    // const title = ()=>titles[Math.floor(Math.random()*titles.length)];
    console.log("title")
    // const price = ()=>(Math.random() * 100).toFixed(2);

  return (
    <div>
        <div className='card'>
            <img src="https://picsum.photos/200/300" alt="image" />
            <h2 >{titles[Math.floor(Math.random()*titles.length)]}</h2>
            <p>₹{(Math.random() * 100).toFixed(0)}</p>
        </div>
           
        

        </div>
     
  )
}

// Create a card component to represent each image in the gallery.
// - Include an image, a random title, and a price in each card.
// - Apply styling for a clean and visually appealing card layout.
// - Implement a hover effect on the card for a smooth interaction.