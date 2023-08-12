import React from 'react'
import "./BottomItem.css"
import profile from "../../Assets/Images/profile_icon.png"
const star = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>

function BottomItem() {
  return (
    <div className='bottom'>

      <div className='bottom_box'>

        <div className='bottom_box_1'>

            <h2>Customer Review</h2>

          <div className='bottom_box_1_1'>

            <div className='bottom_box_1_1_1'>
              <div className='review_1'>
                {star}{star}{star}{star}{star}
                <span ><a className='judge' href='https://judge.me/reviews/skybags-webstore.myshopify.com'>5.00 out of 5</a></span>
                <div>Based on 50 reviews</div>
                <a className='judge_o' href='https://judge.me/trust'>collected by Judge.me</a>
              </div>
            </div>

            <div className='bottom_box_1_1_2'>

              <div className='review1'>
                <div className='review11'>                 
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                </div>
                <div className='review12'></div>
                <div className='review13'>50</div>
              </div>
              <div className='review1'>
              <div className='review11'>                 
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                </div>
                <div className='review12'></div>
                <div className='review13'> 0</div>
              </div>

              <div className='review1'>
              <div className='review11'>                 
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                </div>
                <div className='review12'></div>
                <div className='review13'> 0</div>
              </div>

              <div className='review1'>
              <div className='review11'>                 
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                </div>
                <div className='review12'></div>
                <div className='review13'> 0</div>
              </div>
              
              <div className='review1'>
              <div className='review11'>                 
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                  <span className='review111on'>{star}</span>
                </div>
                <div className='review12'></div>
                <div className='review13'> 0</div>
              </div>
            </div>

           <div className='bottom_box_1_1_3'><button>Write review</button></div>
          
          </div>


        </div>

        <div className='bottom_box_2'>
          <select className='Bottom_box_2_recent'>
          <option value="most-recent">Most Recent</option>
          <option value="highest-rating">Highest Rating</option>
          <option value="lowest-rating">Lowest Rating</option>
          <option value="with-pictures">Only Pictures</option>
          <option value="pictures-first">Pictures First</option>
          <option value="videos-first">Videos First</option>
          <option value="most-helpful">Most Helpful</option>
          </select>
        </div>

        <div className='bottom_box_3'>

          <div className='bottom_box_3_1'>{star}{star}{star}{star}{star}</div>
          <div className='bottom_box_3_2'>
            <img src={profile} alt='img'/>
            <span>Carry</span>
          </div>
          <div className='bottom_box_3_3'>
            <b>Good product</b>
            <p>Quality is so good, I'm satisfied....</p>
          </div>

        </div>

        <div className='bottom_box_4'>
          <button><a>1</a></button>
          <button><a>2</a></button>
          <button><a>3</a></button>
          <button className='aro1'><a></a></button>
          <button className='aro2'><a></a></button>
        </div>

      </div>

    </div>
  )
}

export default BottomItem
