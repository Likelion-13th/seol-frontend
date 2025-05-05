import React from 'react';

const Profile =() =>{
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }
    return (
    <div className="profile-container">{/*빨간박스*/}
        <div className="profile-section">{/*노란박스*/}
            <div className='profile-name'>
                <span className='profile-realname'>seol</span>
                님</div>{/*초록박스*/}
            <div className='profile-membership'>[VVIP회원]</div>{/*초록박스*/}
        </div>
    
        <div className="profile-section">{/*노란박스*/}
            <div className='profile-stat-label'>총결제금액</div>{/*초록박스*/}
            <div className='profile-stat-value'>
                <span >{formatCurrency(10000)}</ span>
            원
            </div>{/*초록박스*/}
        </div>
        <div className="profile-section">{/*노란박스*/}
            <div className='profile-stat-label'>마일리지</div>{/*초록박스*/}
            <div className='profile-stat-value'>
            <span >{formatCurrency(10000)}</ span>
            원
            </div>{/*초록박스*/}
        </div>

    </div>
   );
};

export default Profile;