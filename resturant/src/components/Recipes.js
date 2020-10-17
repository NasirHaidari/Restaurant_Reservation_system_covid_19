import React from 'react';
import hamburger from '../images/ham2.jpg'
import music from '../images/music.jpg'

const recipes = () => {
    return ( 
        <>
        <section className="section-indent">
    <div className="container">
        <div className="row">
            <div className="col-md-2 align-self-start">
            <p className="menuText">
            Eat as much as you want and pay only for one menu.
            </p>
            </div>  
            <div className="pic col-md-4 align-self-start">
                <div className="pic">
                    <img src={hamburger} className="img-fluid rounded" alt="hamburger"/>

                </div>
            </div>  
                <div className="col-md-6 align-self-center">
                    <h2><span className="text-warning font-weight-bold">Hamburger Day</span> every Friday </h2>
                        <p className="mb-4"> Fredagar är den dagen alla längtar till och kom förbi och fira den dagen med godaste hamburhare med obegränsat mängd.</p>

                </div>
        </div>
    </div>
    </section>
    
    <section className="section-indent mb-4">
    <div className="container">
        <div className="row mt-4">
            <div className="col-md-2 order-md-2 align-self-end">
                
                
                <p className="p">
                Come by and listen to the famous voices and if you are lucky maybe get their signature !!!!
                </p>

            </div>
            <div className="col-md-4 order-md-3 align-self-start">
                
                
                <div className="pic alt">
                    <img src={music} className="img-fluid rounded" alt="concert"/>
                </div>

            </div>
            <div className="col-md-6 order-md-1 align-self-center">
                
                
                <h2 className=""><span className="text-warning font-weight-bold">Events</span> Every Saturday!</h2>
                <p>
                live music every Saturday by the famous faces from around the world.
                </p>

            </div>
        </div> 
    </div> 
</section>
       

</>
     );
}
 
export default recipes;




        // <div classNameNameName="container">
        // <div classNameNameName="bg-aqua">
        // <p classNameNameName="1">1</p>
        // </div>
        // <div>
        // <p>2</p>
        // </div>
        // </div>