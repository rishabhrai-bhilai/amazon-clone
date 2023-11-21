import React from 'react'
import "./User.css";
function User() {
  return (
    <>

<div className="body">

<div className="profile_info">
    <div className="info">
        <span className="main_span">Rishabh Rai</span>
        <span className="secondary_span">Bhilai,IND</span>
    </div>
    <div className="sign_out">Sign Out</div>
</div>

<div className="content">

    <div className="left_menu">
        <div className="left_navigator">
            <div className="list">Profile</div>
            <div className="list">Orders</div>
            <div className="list">Address</div>
            <div className="list">Payment</div>
            <div className="list">Whishlist</div>
        </div>
    </div>

    <div className="right_menu">

        <div className="order_heading">
            <span className="main_span" style={{fontSize:2+"rem"}}>Orders</span>
        <span className="secondary_span" style={{fontSize:1+"rem", marginLeft: 5+"px"}}>8 Items</span>
        </div>

        <div className="order_box">

            {/* <!-- order no 1  --> */}
            <div className="order_detail">

                <div className="section">
                    <span className="main_span">Order 41535</span>
                    <span className="secondary_span">View item-</span>
                </div>

                <div className="section">shipped on 19/Aug</div>

                <div className="section">
                    <div className="short_image">
                        <img className="order_img" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_412,c_limit,fl_progressive/assets/images/2021/12/28/58f118b5-2ef9-4cf7-a371-6bc9dd4e26bf1640668594229-croppedImage-1640668593851.jpg" alt="Product Image" />
                      </div>
                </div>
            </div>


            {/* <!-- order no 2  --> */}
            <div className="order_detail">

                <div className="section">
                    <span className="main_span">Order 41535</span>
                    <span className="secondary_span">View item-</span>
                </div>

                <div className="section">shipped on 19/Aug</div>

                <div className="section">
                    <div className="short_image">
                        <img className="order_img" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20179254/2022/9/27/6488dabd-5c2b-40d1-898e-6414f87b968e1664260019035RelaxedFitHoodie1.jpg" alt="Product Image" />
                      </div>
                </div>
            </div>

            {/* <!-- order no 3  --> */}
            <div className="order_detail">

                <div className="section">
                    <span className="main_span">Order 41535</span>
                    <span className="secondary_span">View item-</span>
                </div>

                <div className="section">shipped on 19/Aug</div>

                <div className="section">
                    <div className="short_image">
                        <img className="order_img" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10365905/2019/8/14/559c18f8-9673-41a7-978c-91d11357654b1565784192977-HM-Men-Beige-Hooded-Sweatshirt-131565784192179-1.jpg" alt="Product Image" />
                      </div>
                </div>
            </div>


            
        </div>



        <div class="page_nav">
            <div className="page_no">1</div>
            <div className="page_no">2</div>
            <div className="page_no">3</div>
            <div className="page_no">4</div>
        </div>
    </div>

</div>
</div>
    </>
  )
}

export default User