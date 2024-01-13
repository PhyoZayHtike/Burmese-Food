import React from 'react'
import data from "../json/Data.json";
import foodType from '../json/UserTypes.json'
import { Link , useParams  } from 'react-router-dom'

const styles = {
  fontFamily: 'Lemon, serif',
}

function FoodDetail() {
  const {id} = useParams()
  const foodData = data.find((food) => food.Guid == id)
  const type = foodType.find((type) => type.UserId == foodData.UserType)
  const {Name,Ingredients,CookingInstructions} = foodData
  const {UserMMType,UserEngType} = type
  return (
    <div className='container'>
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
            <div className='col-10 col-md-6 m-auto col col-lg-4 m-md-0'>
              <img className='w-100 card border-4 shadow-sm' src={`/img/${Name}.jpg`} alt={Name} onError={(e)=>{e.target.src="/img/default.png"}}/>
            </div>
            <div className='col-10 col-md-6 m-auto m-md-0 mt-4'>
            <Link to="/" className="btn btn-dark fw-bold px-4 rounded-4 float-end">Back</Link>
               <div>
               <h1 style={styles}>For</h1>
               <p className='fs-5'>{UserMMType} <span className='fw-bold'>Or</span> {UserEngType}</p>
               </div>
               <div>
                <h1 style={styles}>Menu Name</h1>
                <p className='fs-5'>{Name}</p>
               </div>
               <div>
                <h1 style={styles}>Ingredients</h1>
                <p className='fs-5'>{Ingredients}</p>
               </div>
               <div>
                <h1 style={styles}>How to cook?</h1>
                <p className='fs-5'>{CookingInstructions}</p>
               </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FoodDetail