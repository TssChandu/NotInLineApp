import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";

const doctorsDataArray = [{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Nirmalya Medicine",
   site: "",
   review: "5.0/5.0",
   location: " Plot-199, District Centre, Care Hospital Lane, Chandrasekharpur, Bhubaneshwar",
   doctors: ["Dr Sunil Madhaba Panda"]
},
{
   name: "SAI ANSH DENTAL CLINIC",
   site: "",
   review: "4.6/5.0",
   location: "HIG 5/3, Above INDIFAB, NANDANKANAN ROAD, Chandrasekharpur, Bhubaneshwar - 751016, NEAR BPCL PETROL PUMP ",
   doctors: ["DR.SLPIRANJAN MISHRA", "DR. AMRITA KAR"]
},
{
   name: "VARASHA CLINIC",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Orthospinecare",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Aspire Hospitals",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Health Village Hospital",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Sanjeevani multispeciality clinic",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Oro care dental and ent clinic",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "SHANTI POLY CLINIC & PATHOLOGY",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "SARASWATI SUPPERSPECIALITY CLINIC",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "RR PHARMA",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Spine and Ortho care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
{
   name: "Ashu Skin Care",
   site: "https://www.ashuskincare.com/",
   review: "4.6/5.0",
   location: "Plot No- 202, Near IDBI Bank, Biju Pattnaik College Rd, Jayadev Vihar, Bhubaneswar, Odisha",
   doctors: ["Dr.ANITA RATH", "Dr. Rabi Narayan Satapathy"]
},
]


const BookAppointment = () => {
   const [searchInput, setSearchInput] = useState("")
   let [searchResults, setSearchResults] = useState(doctorsDataArray)
   let results
   const handleClick = () => {
      results = doctorsDataArray.filter(obj => {
         const name = obj.name.toLowerCase()
         const location = obj.location.toLowerCase()
         return (
            name.includes(searchInput.toLowerCase()) || location.includes(searchInput.toLowerCase())
         )
      })
      setSearchResults(results)
      setSearchInput("")
      console.log(results)
   }

   return (
      <div className='bg-container'>
         <div className='d-flex justify-content-start search-bg-container'>
            <div className="search-container">
               <h6>Search Filters</h6>
               <div className="d-flex justify-content-center mt-3 p-0">
                  <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                     id="search" className="search-input" name="search" placeholder="Search clinics, hospitals, etc." />
                  <button className='search-btn' onClick={handleClick}
                     style={{ backgroundImage: "linear-gradient(to right, #7468d7 0%, #1797df 100%)" }}
                     type="button"><FiSearch size={20} color='#fff' /></button>
               </div>
            </div>
            <div >
               <ul className='results-container'>
                  {searchResults.map((card, index) => (
                     <div key={index} className='result-card'>
                        <h5><b>Name: </b>{card.name}</h5>
                        <p><b>Website: </b>{card.site}</p>
                        <p><b>Reviews: </b>{card.review}</p>
                        <p><b>Location: </b>{card.location}</p>
                        <ul>
                           {card.doctors.map((name, index) => <li key={index}>{name}</li>)}
                        </ul>
                     </div>
                  ))}
               </ul>
            </div>
         </div>

      </div>
   )
}

export default BookAppointment