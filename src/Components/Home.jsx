import Carousel from 'react-bootstrap/Carousel';
import './home.css'
function Home() {
  return (
   <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height:'100%'}}>
    <h1 className='fw-bolder'>Image Slider</h1>
    <div style={{width:'550px',height:'450px'}} className='bgfor rounded'>
         <Carousel className=''>
          <Carousel.Item>
            <div></div>
          <img className='m-5 rounded' src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'450px',height:'350px'}}/>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className='m-5 rounded' src="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'450px',height:'350px'}}/>
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='m-5 rounded' src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'450px',height:'350px'}}/>
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='m-5 rounded' src="https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'450px',height:'350px'}}/>
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className='m-5 rounded' src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:'450px',height:'350px'}}/>
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
   </div>
  );
}

export default Home;
