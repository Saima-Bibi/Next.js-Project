import UploadBox from '@/components/UploadBox'
import React from 'react'

export default function page() {
    const languages = [
        {
        id:1,
    content:'Dari'},
    {
        id:2,
    content:'Pashto'},
    {
        id:3,
    content:'Urdu'},
    {
        id:4,
    content:'Hindi'},
    {
        id:5,
    content:'Arabic'},
    {
        id:6,
    content:'Other'}]
  return (
    <>
    <div  className="relative bg-[url('/eye-cyber.jpg')] h-screen bg-cover">
        <div className=' flex flex-row justify-center w-full   '>
           
{languages.map((lang)=>(
 <div  key={lang.id}  className='bg-[#CBC3B0] p-2 mt-5  '>
   <button className='bg-[#351C01] py-1 px-4  text-xs lg:text-sm  text-white font-semibold drop-shadow-xl/25'>{lang.content}</button>
</div>
))}
 </div>

 <div className='flex flex-row'>

  <div className='flex flex-col  gap-y-6 rounded-xl absolute left-[5%] sm:left-[20%] md:left-[25%] lg:left-[25%]  top-[45%] transform  items-center'>
   <button className='bg-[#D4C1AD]  rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25 '>
<svg xmlns="http://www.w3.org/2000/svg" className='drop-shadow-xl/25' viewBox="0 0 640 640" width="30" height="30"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM337 327C327.6 317.6 312.4 317.6 303.1 327L239.1 391C229.7 400.4 229.7 415.6 239.1 424.9C248.5 434.2 263.7 434.3 273 424.9L296 401.9L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 401.9L367 424.9C376.4 434.3 391.6 434.3 400.9 424.9C410.2 415.5 410.3 400.3 400.9 391L336.9 327z"/></svg>   </button>
     <button className='bg-[#D4C1AD]   rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25'>
<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/25' viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
  <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM12.75 13.5a.75.75 0 0 1-1.5 0V9.31l-1.72 1.72a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V13.5Z" clipRule="evenodd" />
</svg>

     </button>
       <button className='bg-[#D4C1AD]  rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25'>
<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/25' viewBox="0 0 640 640"  width="30" height="30"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>     
  </button>

</div>
        {/* Circle */}  
     <div className="absolute inset-0 flex items-center justify-center">
  <div className=" min-w-85 min-h-85  lg:h-125 lg:w-125 mt-8 rounded-full bg-[#B17030] opacity-90 border-4 border-[#B83636]">
    
  </div>
   <p className='   text-black  absolute top-[52%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4  font-normal'>Select Target Language</p>

   
</div>

<div className='flex flex-col gap-y-6  absolute left-[87%] top-[45%]  sm:left-[73%] md:left-[69%] lg:left-[71%]  '>
   <button className='bg-[#D4C1AD]  rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25 '>
<svg xmlns="http://www.w3.org/2000/svg"   className='drop-shadow-xl/25' viewBox="0 0 640 640" width="30" height="30"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM337 327C327.6 317.6 312.4 317.6 303.1 327L239.1 391C229.7 400.4 229.7 415.6 239.1 424.9C248.5 434.2 263.7 434.3 273 424.9L296 401.9L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 401.9L367 424.9C376.4 434.3 391.6 434.3 400.9 424.9C410.2 415.5 410.3 400.3 400.9 391L336.9 327z"/></svg>   </button>
     <button className='bg-[#D4C1AD]   rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25 '>
<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/25' viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
  <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM12.75 13.5a.75.75 0 0 1-1.5 0V9.31l-1.72 1.72a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V13.5Z" clipRule="evenodd" />
</svg>

     </button>
       <button className='bg-[#D4C1AD]  rounded-md py-1 px-3 text-sm text-black font-semibold drop-shadow-xl/25'>
<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/25' viewBox="0 0 640 640"  width="30" height="30"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>     
  </button>


</div>
</div>

<div className='absolute left-1/2 top-[72%]    transform -translate-x-1/2  -translate-y-0'>
   <button className=' bg-[#0CA5B7] py-1 px-8 lg:px-18 lg:py-2 text-white rounded-3xl text-xs lg:text-md font-bold'>Translate Now</button>

</div>

     <div className=' grid grid-flow-col grid-rows-2 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-0 '>
           
{languages.map((lang)=>(
 <div  key={lang.id}  className=' p-2  '>
   <button className='bg-[#372109] 0 py-1 w-13 lg:w-20  hover:text-[#372109]  hover:bg-white text-xs lg:text-sm  text-white  font-semibold drop-shadow-xl/25'>{lang.content}</button>
</div>
))}
 </div>

    <UploadBox></UploadBox>



<div  className='flex flex-col gap-y-4    justify-center'>
  <button className='bg-[#B63636] rounded-full p-1 lg:p-2 drop-shadow-xl/25  left-[21%] lg:left-[33%] top-1/2 sm:left-[30%] md:left-[34%] absolute'>

<svg xmlns="http://www.w3.org/2000/svg" className='drop-shadow-xl/50' viewBox="0 0 640 640" fill='white' height='26' width='26'><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>

  </button>
  
   <button className='bg-[#B63636] rounded-full p-1 lg:p-2 drop-shadow-xl/25   left-[22%] lg:left-[34%]  top-[57%] lg:top-[60%] sm:left-[32%] md:left-[35%] absolute'>

<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/50' viewBox="0 0 640 640" fill='white' height='26' width='26' ><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>


  </button>
</div>

<div  className='flex flex-col  gap-y-4    justify-center '>
  <button className='bg-[#B63636] rounded-full p-1 lg:p-2 drop-shadow-xl/25 left-[71%] lg:left-[63%] top-1/2 sm:left-[65%] absolute md:left-[62%]'>

<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/50' viewBox="0 0 640 640" fill='white' height='26' width='26'><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>
  </button>
   <button className='bg-[#B63636] rounded-full p-1 lg:p-2 drop-shadow-xl/25 left-[71%] lg:left-[62%] top-[57%] lg:top-[60%] sm:left-[63%] absolute md:left-[61%]'>

<svg xmlns="http://www.w3.org/2000/svg"  className='drop-shadow-xl/50' viewBox="0 0 640 640"  fill='white' height='26' width='26'><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z"/></svg>
  </button>
</div>
        
        <p className=' absolute text-white text-center w-full bottom-0 text-sm text-shadow-sm text-shadow-orange-300'> &copy;
 2025 Vision Tech 360. All Rights Reserved</p>

    </div>
    
    </>
  )
}
