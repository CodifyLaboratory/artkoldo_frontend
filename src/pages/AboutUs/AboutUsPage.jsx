import { React } from "react";
import PageWrapper from "../../components/PageWrapper/index";
import logo from "../../images/product-logo.jpeg";
// import { Link } from "react-router-dom";
import "./AboutUsPage.css";
// import { API_URL } from "../../API/api";
// import axios from "axios"



export default function AboutUsPage() {
  // const [text, setText] = useState();
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/api/info/about_us/`)
  //     .then((r) => setText(r.data));
  //     console.log('kobght')
  // }, []);

  return (
    <div>
      <PageWrapper>
        <div className="breadcrumbs">
          <span>
            <a href="/">Главная/</a>
          </span>
          <span>О нас</span>
        </div>
        <hr />
        <div className="about-us-Block">
          <span>О нас</span>
          <hr />
          <div className="short-info">
            <div className="short-info-text">
              <span> Краткая информация о платформе</span>
              
              <p> 
             
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                odit maxime hic ipsum tempore quae ratione id dolore. Ea
                voluptates, culpa dolor, odio cum rerum omnis, sunt sint
                excepturi tempora delectus iusto enim quasi vel assumenda quas
                sequi? Harum accusamus fugiat voluptate quasi dicta iste dolorum
                iure voluptates maiores. Sapiente doloremque possimus fugiat
                voluptas nulla nemo nam vero distinctio pariatur, esse similique
                debitis nostrum exercitationem aspernatur asperiores, dolores
                soluta!
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                corporis molestias libero eveniet quaerat soluta laborum
                explicabo maxime enim tempore odio dicta ducimus magnam ut
                facilis culpa qui cupiditate pariatur dolore adipisci at,
                repellat nobis. Consequatur libero dolorum reiciendis eaque ad
                quos porro obcaecati corporis sequi quod.
              </p>
            </div>
            <div className="short-info-logo">
              {/* <img src="logo" alt="../../images/logo.png"/> */}
            </div>
          </div>
        </div>

        <div className="founders-block">
          <span>Основатели</span>
          <hr />
          <div className="founders">
            <div className="founder1 d-flex">
              <div className="founder-img">
                <img src={logo} />
              </div>
              <div className="founder-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                omnis neque quasi libero cum doloremque a, culpa similique
                facere odit beatae dolor. Mollitia labore amet, accusamus
                repudiandae quis quidem accusantium.
              </div>
            </div>
            <div className="founder2 d-flex">
              <div className="founder-img">
                <img src={logo} />
              </div>
              <div className="founder-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                omnis neque quasi libero cum doloremque a, culpa similique
                facere odit beatae dolor. Mollitia labore amet, accusamus
                repudiandae quis quidem accusantium.
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
