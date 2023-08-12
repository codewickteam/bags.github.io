import React from 'react'
import "./TopItem.css"
import img1 from "../../Assets/Images/bag_1.png"
import img2 from "../../Assets/Images/bag_2.png"
import img3 from "../../Assets/Images/bag_3.png"
import img4 from "../../Assets/Images/bag_4.png"
import img5 from "../../Assets/Images/bag_5.png"
import img6 from "../../Assets/Images/bag_6.png"
import img7 from "../../Assets/Images/bag_7.png"
import img8 from "../../Assets/Images/bag_8.png"
import img0 from "../../Assets/Images/bag.png"
import down_arrow from "../../Assets/Images/down_arrow.png"
import up_arrow from "../../Assets/Images/up_arrow.png"
import share_icon from "../../Assets/Images/share_icon.png"
import remove_icon from "../../Assets/Images/remove_icon.png"
import add_icon from "../../Assets/Images/add_icon.png"
import pin_code_icon from "../../Assets/Images/pin_code_img.png"
import {data} from '../../API/data'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/skybagsSlice'

function toggleBlock(event) {
  if (event.target.nextElementSibling.style.display=="none") {
    event.target.nextElementSibling.style.display="block";
  }
  else{
    event.target.nextElementSibling.style.display="none";
  }
  
}

function TopItem() {
  const params = useParams();
  const mId= (params.id) - 1;
  const arr = data[mId];
  console.log(arr.price);
  
  const dispatch = useDispatch();

  return (
    <div className='top'>
      <nav className='top1'>
      <a href="/" title="Back to the frontpage">Home</a>
      <span class="breadcrumb__divider" aria-hidden="true">/</span>
      <a href="/collections">Collections</a>
      <span class="breadcrumb__divider" aria-hidden="true">/</span>
      <a href="/collections/top-backpack" title="">Top Backpack</a>
      <span class="breadcrumb__divider" aria-hidden="true">/</span>
      {arr.title} "{arr.category}"
      </nav>
      <div className='top2'>

        <div className='top21'>
          <div className='product_images'>
          <div className='image_up_arrow'><img src={up_arrow}/></div>
            <div className='img_scroll'>
              <div className='product_img'><img src={arr.images[0][0]}/></div>
              <div className='product_img'><img src={arr.images[0][1]}/></div>
              <div className='product_img'><img src={arr.images[0][2]}/></div>
              <div className='product_img'><img src={arr.images[0][3]}/></div>
              <div className='product_img'><img src={arr.images[0][4]}/></div>
              <div className='product_img'><img src={arr.images[0][5]}/></div>
              <div className='product_img'><img src={arr.images[0][6]}/></div>
              {/* <div className='product_img'><img src={img2}/></div>
              <div className='product_img'><img src={img3}/></div>
              <div className='product_img'><img src={img4}/></div>
              <div className='product_img'><img src={img5}/></div>
              <div className='product_img'><img src={img6}/></div>
              <div className='product_img'><img src={img7}/></div>
              <div className='product_img'><img src={img8}/></div> */}
            </div>
            <div className='image_down_arrow'><img src={down_arrow}/></div>
          </div>
          <div className='current_image'>
            <img src={arr.images[0][0]} alt='img'/>
            <div className='share_icon'><img src={share_icon} alt='share'/></div>
          </div>
        </div>

        <div className='top22'>

          <div className='bag_name'>
            <h1>{arr.title}</h1>
            <span>{arr.category}</span>
          </div>

          <div className='bag_details'>
            <div className='bag_price'>M.R.P. Rs. {arr.price*1.5}</div>
            <div className='sale_price'>Rs. {arr.price}<span className='sale_text'>Inclusive of all taxes</span></div>
            <div  className='product_policies' >Shipping<span className='product_policy_text'>calculated at checkout.</span></div>
          </div>
          
          < hr className='bag_detail_hrline'/>

          <div className='bag_color'>
            <div><label>color - {arr.color[0]}</label></div>
            <div className='bag__img_color'>
              {
                arr.images.map((items)=>(
                  <img src={items[0]}/>
                  
                  ))
                }
                {/* <img src={arr.images[0][0]}/>
              <img src={arr.images[1][0]}/> */}
            </div>
          </div>

          <div className='quantity'>
            <div><label>Quantity</label></div>
            <div className='whole_addremove'>
              <img className='add_remove_icon' src={remove_icon} alt='remove'/>
              <span className='numberbwicon'>1</span>
              <span><img className='add_remove_icon' src={add_icon} alt='add'/></span>              
            </div>
          </div>

          <div className='bag_delivery'>
            <div className='pin_code_text'><p>Enter PIN code to check availability</p></div>
            <div className='checker_combine'>
              <div className='check_details'>
                <img src={pin_code_icon} alt='pin code icon'/>
                <span className='pincode'>302039</span>
                <span className='check_text'>check</span>
              </div>
            </div>
            <div className='benifits'><p>Fastest Delivery In 2 Days Anywhere In India.</p></div>
            <div className='benifits'><p>Scan QR Code On Purchase & Get Extended E-Warranty.</p></div>
            <div className='benifits'><p>Free Shipping And COD Upto Rs 2500/-.</p></div>
          </div>

          <div className='add_to_cart'>
            <button className='addbutton' onClick={()=>dispatch(addToCart({
                  id:arr.id,
                  title:arr.title,
                  img:arr.images[0][0],
                  quantity:1,
                  price:parseInt(arr.price)

                }))}>Add to cart</button>
            <button className='buybutton'>Buy Now</button>
          </div>


          <div className='faq'>

            <div onClick={toggleBlock} className='faq_heading'>
            <button>DESCRIPTION</button>
            <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
              <div className='faq_description'>{arr.description.description}</div>
              <div className='faq_features'>
                <div  className='faq_features_heading'>FEATURES</div>
                <div className='feature_list'>
                  <ul>
                    {
                      arr.features.features.map((items)=>(
                        <li>{items}</li>

                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className='faq_key_features'>
                <div className='faq_features_heading'>KEY FEATURES</div>
                <div className='feature_list'>
                  <ul>
                    {
                      arr.features.keyFeatures.map((items)=>(
                        <li>{items}</li>  
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className='faq'>
            <div onClick={toggleBlock} className='faq_heading'>
              <button button>SIZE AND DIMENSIONS</button>
              <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
              {
                arr.description.sizeAndDim.map((items)=>(
                  <p>{items}</p>
                ))
              }
            </div>
          </div>

          <div className='faq'>
            <div onClick={toggleBlock} className='faq_heading'>
              <button>MANUFACTURED AND MARKED BY</button>
              <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
              <p>{arr.description.manufactured}</p>
            </div>
          </div>

          <div className='faq'>
            <div onClick={toggleBlock} className='faq_heading'>
              <button>MATERIAL CARE</button>
              <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
              <p>{arr.description.materialCare}</p>
            </div>
          </div>

          <div className='faq'>
            <div onClick={toggleBlock} className='faq_heading'>
              <button>FAQ</button>
              <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
              <div>
                <div onClick={toggleBlock} className='faq_question'>
                  <span className='faq_expand'>+</span>
                  <span>Which is the best college backpack?</span>
                </div>
                <div className='faq_answer'>College backpacks are one of the most important accessories of your college outfit. Whether it is for college boys or girls, a good college backpack can make a whole lot of difference. Skybags has a range of stylish and cool college backpacks which are designed keeping in mind the needs of college students. You can pick from a college laptop backpack to a casual slim college backpack or a daypack backpack. All of these options come with great features like spacious compartments, long lasting shoulder straps, water bottle holders and more.</div>
              </div>

              <div>
                <div onClick={toggleBlock} className='faq_question'>
                  <span className='faq_expand'>+</span>
                  <span>Where do you buy backpacks for college students?</span>
                </div>
                <div className='faq_answer'>With the advance of technology, hardly anyone wants to go to a physical shop. Therefore, Skybags offers you the option of shopping for your college backpacks online. While you browse through the plethora of options in the comfort of your home, you can pick the backpack of your choice and place the order. With easy returns and smooth online payments, you don’t need to worry about anything with Skybags</div>
              </div>

              <div>
                <div onClick={toggleBlock} className='faq_question'>
                  <span className='faq_expand'>+</span>
                  <span>What size backpacks are good for college?</span>
                </div>
                <div className='faq_answer'>The average size of college backpacks range from 11 litres for daypack backpack to 30L, 33L and up to 37L for large size college backpacks.</div>
              </div>

              <div>
                <div onClick={toggleBlock} className='faq_question'>
                  <span className='faq_expand'>+</span>
                  <span>What colour backpack should I get for college?</span>
                </div>
                <div className='faq_answer'>College time is all about having fun, building lifelong friendships, and shaping your future. You can go wild with your colour choices as you can mix and match your outfits with your accessories. Skybags offers you a range of colours that are vibrant and full of textured graphics. Pick from a sea blue to a dark pink, there is no dearth of options here.</div>
              </div>

              <div>
                <div onClick={toggleBlock} className='faq_question'>
                  <span className='faq_expand'>+</span>
                  <span>Which is the best college backpack brand?</span>
                </div>
                <div className='faq_answer'>With a range of brands that are available in the market, very few offer the style and comfort that Skybags has to offer. Skybags’ college bags enable you to move in style while fulfilling all your functional needs. Order online on the Skybags website and get ready to flaunt your college backpacks amongst your friends.</div>
              </div>

            </div>
          </div>

          <div className='faq'>
            <div onClick={toggleBlock} className='faq_heading'>
              <button>TERMS AND CONDITIONS</button>
              <span className='faq_downarrow'><img src={down_arrow} alt='arrow'/></span>
            </div>
            <div className='faq_content'>
                <div className='feature_list'>
                  <p>{arr.description.terms[0]}</p>
                  <p>{arr.description.terms[1]}</p>
                  <p>{arr.description.terms[2]}</p>
                  <p>{arr.description.terms[3]}</p>
                  <p>{arr.description.terms[4]}</p>
                </div>
              </div>
          </div>

        </div>
      
      </div>
    </div>
  )
}

export default TopItem
