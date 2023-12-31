import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import styles from '../Style/style'


const FaqScreen = () => {
  return (
    <div>
      <Header activeHandel={5}/>
      <br/>
      <br/>
      <FAQ/>
      <Footer/>
        
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
              How do i track my order?
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
          onClick={()=>toogleTab(2)}
          >
            <span className='text-lg font-medium text-gray-900'>
              What is your return policy?
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
                    we typically process and ship order within 1-2 business days.
                    Depending on your location , it can take an additional 2-7 days 
                    for pickup your order and after 24 hours we will return  your
                     payment in your bank account.
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
              How do i track my order?
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
          onClick={()=>toogleTab(4)}
          >
            <span className='text-lg font-medium text-gray-900'>
              How do i connect customer support?
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
          onClick={()=>toogleTab(5)}
          >
            <span className='text-lg font-medium text-gray-900'>
              Can i change or cancel my order?
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

       </div>

      </div>


    </div>
    </>
    
  )
}

export default FaqScreen