import React from 'react'

const SingleUser = ({user}) => {
  return (

    <div className='single-user-list'>

        <div className='single-user-list-container'> 

            <img src={user.picture.large} alt={user.name.first}/>

            <div className='single-user-info'>
                
                <h4 className='single-user-name'> {user.name.first} {user.name.last}</h4>
                <p className='single-user-mail'>{user.email}</p>
                <p className='single-user-location'> 
                    {user.location.country}  | {user.location.city}
                
                </p>

            </div>    
        
        
         </div>


    </div>


  )
}

export default SingleUser;