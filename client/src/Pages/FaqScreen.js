import React, { useState } from 'react'
import styles from '../Style/style'



const FaqScreen = () => {
  return (
    <div>
     
     
      <FAQ/>
     
        
    </div>
  )
}


const FAQ =()=>{
  const [activeTab,setActiveTab] = useState(0)

  const toogleTab = (tab)=>{
    if(activeTab === tab){
      setActiveTab(0)
    }
    else{
      setActiveTab(tab)
    }
  }
  return(
    <>
<div className={`${styles.section} my-8 `}>
      <h2 className='text-3xl font-bold text-gray-900 mb-8'>
        FAQ
      </h2>
      <div className='mx-auto space-y-4'>

        {/* single Faq */}

        <div className='border-b border-gray-200 pb-4'>
         
          <button 
          className='flex items-center justify-between w-full '
          onClick={()=>toogleTab(1)}
          >
            <span className='text-lg font-medium text-gray-900'>
            When will I get paid on webEarn?
            </span>
            
              {activeTab === 1 ? 
                (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>)
            }

           
  
          </button>
          {
              activeTab === 1 && (
                <div className='mt-4'>
                  <p className='text-base text-gray-500'>
                  You will get paid on a daily basis, which means you get
                   paid EVERY day for offers labeled as Fast Pay offers. 
                   This means every 24 hours. There are still some offers in our system 
                   that pay on a NET30 basis and if you'd like
                   to avoid those, then simply only promote offers that have the 'Fast Pay' label next to them.
                  </p>

                </div>
              )
            }

        </div>


        <div className='border-b border-gray-200 pb-4'>
         
          <button 
          className='flex items-center justify-between w-full '
          onClick={()=>toogleTab(2)}
          >
            <span className='text-lg font-medium text-gray-900'>
              How to Complete the offer?
            </span>
            
              {activeTab === 2 ? 
                (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>)
            }

           
  
          </button>
          {
              activeTab === 2 && (
                <div className='mt-4'>
                  <p className='text-base text-gray-500'>
                    You just need to click on the offer name that shows in blue color. 
                    After that you will be redirect to the main window of offer then 
                    follow the instuction and complete the offer.
                  </p>

                </div>
              )
            }

        </div>




        <div className='border-b border-gray-200 pb-4'>
         
          <button 
          className='flex items-center justify-between w-full '
          onClick={()=>toogleTab(3)}
          >
            <span className='text-lg font-medium text-gray-900'>
            When can i request for transfer ?
            </span>
            
              {activeTab === 3 ? 
                (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>)
            }

           
  
          </button>
          {
              activeTab === 3 && (
                <div className='mt-4'>
                  <p className='text-base text-gray-500'>
                    You can transfer money by sending the request to us.
                    you can only send request when  have atleast 3$ balance in your account.
                  </p>

                </div>
              )
            }

        </div>



        <div className='border-b border-gray-200 pb-4'>
         
          <button 
          className='flex items-center justify-between w-full '
          onClick={()=>toogleTab(4)}
          >
            <span className='text-lg font-medium text-gray-900'>
              What's the payment menthod ?
            </span>
            
              {activeTab === 4 ? 
                (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>)
            }

           
  
          </button>
          {
              activeTab === 4 && (
                <div className='mt-4'>
                  <p className='text-base text-gray-500'>
                    Click on PaymentMethod option then click on add new then add upi
                     then send request us for money. 
                    We Will transfer money to your account directly 
                  </p>

                </div>
              )
            }

        </div>



        <div className='border-b border-gray-200 pb-4'>
         
          <button 
          className='flex items-center justify-between w-full '
          onClick={()=>toogleTab(5)}
          >
            <span className='text-lg font-medium text-gray-900'>
              In how much days i received payment?
            </span>
            
              {activeTab === 5 ? 
                (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>)
            }

           
  
          </button>
          {
              activeTab === 5 && (
                <div className='mt-4'>
                  <p className='text-base text-gray-500'>
                    You will receive the payment of this month at the end of next month.                   </p>

                </div>
              )
            }

        </div>


        {/* <div className='border-b border-gray-200 pb-4'>
         
         <button 
         className='flex items-center justify-between w-full '
         onClick={()=>toogleTab(6)}
         >
           <span className='text-lg font-medium text-gray-900'>
             What payment method do you accept?
           </span>
           
             {activeTab === 6 ? 
               (
               <svg
                 className="h-6 w-6 text-gray-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
                 />
               </svg>
             ) : (
               <svg
                 className="h-6 w-6 text-gray-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>)
           }

          
 
         </button>
         {
             activeTab === 6 && (
               <div className='mt-4'>
                 <p className='text-base text-gray-500'>
                   we typically process and ship order within 1-2 business days.
                   Depending on your location , it can take an additional 2-7 days 
                   for your order to arrive.
                 </p>

               </div>
             )
           }

       </div>

       <div className='border-b border-gray-200 pb-4'>
         
         <button 
         className='flex items-center justify-between w-full '
         onClick={()=>toogleTab(7)}
         >
           <span className='text-lg font-medium text-gray-900'>
             Can i change payment method after placed the order?
           </span>
           
             {activeTab === 7 ? 
               (
               <svg
                 className="h-6 w-6 text-gray-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M6 18L18 6M6 6l12 12"
                 />
               </svg>
             ) : (
               <svg
                 className="h-6 w-6 text-gray-500"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>)
           }

          
 
         </button>
         {
             activeTab === 7 && (
               <div className='mt-4'>
                 <p className='text-base text-gray-500'>
                   we typically process and ship order within 1-2 business days.
                   Depending on your location , it can take an additional 2-7 days 
                   for your order to arrive.
                 </p>

               </div>
             )
           }

       </div> */}

      </div>


    </div>
    </>
    
  )
}

export default FaqScreen