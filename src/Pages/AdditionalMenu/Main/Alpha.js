import React from "react";
import Button from "../../../Components/Register_Components/Button";

import SubHeading from "../../../Components/Store/SubHeading/SubHeading";
import { images } from "../../../Constants";
import "./Alpha.css";

const Alpha = () => {
  return (
    <div className="moreMenu app__bg">
      <div className="moreMenu_heading">
        <h1>Ebad's</h1>
        <h3>&mdash; MENU &mdash;</h3>
      </div>

      <SubHeading title="Main Courses – From the Nawabi Kitchen" />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="food-items">
              <img src={images.Mutton} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Mutton Shahi Korma</h5>
                  <h5 className="price">&#8377; 500</h5>
                  <p>(Rich mutton preparation in Awadhi style)</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.Nihari} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Nihari Gosht</h5>
                  <h5 className="price">&#8377; 550</h5>
                  <p>
                    (Lamb shanks cooked in rich Yakhni with home Awadhi homemade
                    spices)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.Murgh} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Murgh Musallam</h5>
                  <h5 className="price">&#8377; 595</h5>
                  <p>
                    (Popular whole chicken preparation from royal Mughal family)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="food-items">
              <img src={images.KandanMurgh} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Murgh Kundan Kaliyan</h5>
                  <h5 className="price">&#8377; 650</h5>
                  <p>
                    (Boneless chicken tikka cooked in rich Mughlai gravy
                    flavored with rose petal)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.Afghani} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Murgh Afghani</h5>
                  <h5 className="price">&#8377; 650</h5>
                  <p>(Tender pieces of chicken cooked in a creamy sauce)</p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.Changezi} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Murgh Changezi</h5>
                  <h5 className="price">&#8377; 450</h5>
                  <p>
                    (Creamy gravy based curry specially prepared with milk and
                    fresh cream.)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="food-items">
              <img src={images.Roghan} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Mutton Roghan Josh</h5>
                  <h5 className="price">&#8377; 570</h5>
                  <p>
                    ( pieces of mutton braised with a gravy flavoured with
                    garlic, ginger and aromatic spices.)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.DoPyaza} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Mutton Do Pyaza</h5>
                  <h5 className="price">&#8377; 560</h5>
                  <p>
                    (made of goat meat and spiced with lots of onions. full of flavour comes from slow braising on low heat and onions are added in two stages)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="food-items">
              <img src={images.ButterChicken} alt="Mutton" />
              <div className="details">
                <div className="details-sub">
                  <h5>Butter Chicken</h5>
                  <h5 className="price">&#8377; 500</h5>
                  <p>
                    (Is prepared with marinated chicken that's first grilled and then served in a rich gravy (a.k.a. curry) made with tomato, butter)
                  </p>
                </div>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alpha;
