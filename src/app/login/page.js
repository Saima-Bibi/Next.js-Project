
import React from 'react';
import Image from 'next/image'
import img from '/public/next.svg'


function page() {
  return (
    <div>
      <h1>Login Page</h1>
      {/* <title>Login Page</title> */}
      <Image src={img} height={400} width={400} alt='image'/>
      <Image src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?_gl=1*8a07on*_ga*MTUxMDQ3MTcxNS4xNzQ1Njc4NTg0*_ga_8JE65Q40S6*czE3NTE5NTg5NDQkbzIkZzEkdDE3NTE5NTk2MjkkajI5JGwwJGgw' height={400} width={400} alt='image'/>
       

    </div>
  )
}

export default page

export  function generateMetadata (){
return{
  title:'Login Page',
  description:'Login page will authenticate the user'
}
}
