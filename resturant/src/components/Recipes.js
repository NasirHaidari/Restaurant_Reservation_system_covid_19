import React from 'react';
import hamburger from '../images/ham2.jpg'
import music from '../images/music.jpg'
import halloween from '../images/halloween.jpg'

const recipes = () => {
    return ( 
        <>
        <section className="section-indent mb-4">
        <div className="container">
            <div className="row mt-4">
               
                <div className="col-md-6 order-md-3 align-self-start">
                    
                    
                    <div className="pic m-auto ">
                        <img src={halloween} className="img-fluid rounded" alt="halloween night party"/>
                    </div>
    
                </div>
                <div className="col-md-6 order-md-1 align-self-center">
                    
                    
                    <h2 className=""><span className="text-warning font-weight-bold">Halloween night </span> 2020-10-31</h2>
                    <p>
                    do not forget and dress up ... we will have famous DJs from all over the world, music and dance all night !!!


                    </p>
    
                </div>
            </div> 
        </div> 
    </section>



        <section className="section-indent">
    <div className="container">
        <div className="row"> 
            <div className="pic col-md-6 align-self-start">
                <div className="pic m-auto">
                    <img src={hamburger} className="img-fluid rounded" alt="hamburger"/>

                </div>
            </div>  
                <div className="col-md-6 align-self-center">
                    <h2><span className="text-warning font-weight-bold">Hamburger Day</span> 
                    every Friday </h2>
                        <p className="mb-4"> Fridays are the day everyone is waiting for,
                         come by and celebrate that day with the tastiest hamburger with an unlimited amount..
                         Eat as much as you want and pay only for one menu.</p>
                        
                </div>
        </div>
    </div>
    </section>
    
    <section className="section-indent mb-4">
    <div className="container">
        <div className="row mt-4">
           
            <div className="col-md-6 order-md-3 align-self-start">
                
                
                <div className="pic m-auto ">
                    <img src={music} className="img-fluid rounded" alt="concert"/>
                </div>

            </div>
            <div className="col-md-6 order-md-1 align-self-center">
                
                
                <h2 className=""><span className="text-warning font-weight-bold">Events</span> Every Saturday!</h2>
                <p>
                live music every Saturday by the famous faces from around the world.
                Come by and listen to the famous voices and if you are 
                lucky maybe get their signature !!!!
                </p>

            </div>
        </div> 
    </div> 
</section>
       

</>
     );
}
 
export default recipes;




        