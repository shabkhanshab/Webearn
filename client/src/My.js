import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function My() {
  const [offersm, setOffers] = useState([]);
  const [offname, setOffName] = useState([]);
  const {user} = useSelector((state)=>state.userRed)
  console.log(user,"user");

  useEffect(() => {
    $.getJSON(`https://cpalead.com/dashboard/reports/campaign_json.php?id=2831541&format=JSONP&country=IN&subid=${user._id}&password=jaibajrangbalig&callback=?`,
    
				function(data)
				{
					var offers = '';
          var offArray =[]
          var nameArray=[]
					$.each(data.offers, function(o, offer)
					{

						offers += '<a href="'+offer.link+'" class="list-group-item">'+offer.title+'</a>';
            offArray.push(offer.link)
            nameArray.push(offer.title)
            
           
           
					});
          // console.log("offaAr",offArray);
         
          setOffers(offArray)
          setOffName(nameArray)
          // const off = offers.split(",")
          // console.log(typeof offersm);

          // console.log("offer",offersm);
         
					$(".offer-list").html(offers);
					$(".progress").hide();

          
				});
  }, []);

  return (
    <div >
      {console.log("o",typeof offersm)}

      {/* {console.log("l",isLoading)} */}

      {/* {offersm.forEach((e)=>{
        <div className='bg-[green] '>
          {e}
          </div>
      })} */}
      
     
    <div className="container">
		<div className="starter-template text-center 
     flex flex-col
     justify-between">
		<h1>Offer List:</h1>
		
		<div className="list-group  flex bg-white shadow-md h-screen overflow-y-scroll mx-10
      border-[2px] border-[#00000078] items-center 
    flex-col ">
      {
        offname.map((i,e)=>(
        <div className='py-5 border-[2px] my-5 border-indigo-500 w-[50%]'>
            <Link to={offersm[e]}>
            {i}

          </Link>
          </div>
        
        ))
        
      }
     
      </div>		
	</div>

        
  </div>
    </div>
  );
}



export default My;
