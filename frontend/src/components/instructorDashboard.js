import styles from './instructorDashboard.module.css';
import { useState } from 'react';
const InstructorDashboard = () =>{
   
    const message = "Instructor Dashboard";
    const [selectedBadge, setSelectedBadge] = useState("Dashboard");
   /*  const [showDashBoard, setShowDashBoard] = useState(true);
    const [showRestaurants, setShowRestaurants] = useState(false);
    const [showReviews,setShowReviews] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
 */

  // Handle button click to update the selected state
  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
    /*   if(badge === 'Dashboard')
      {
        setShowDashBoard(true);
        setShowRestaurants(false);
        setShowReviews(false);
        setShowUsers(false);
      }
      else if(badge === 'Restaurants')
      {
        setShowDashBoard(false);
        setShowRestaurants(true);
        setShowReviews(false);
        setShowUsers(false);
      }
      else if(badge === 'Reviews')
      {
        setShowDashBoard(false);
        setShowRestaurants(false);
        setShowReviews(true);
        setShowUsers(false);
      }
      else{
        setShowDashBoard(false);
        setShowRestaurants(false);
        setShowReviews(false);
        setShowUsers(true);
      } */
  };

     return(
        <div className={styles.container}>
        
            <div className={styles.middle}>
            <div className={styles.left}>
                <div className={styles.top}>
                {["Dashboard", "Groups", "QAReports","LeaderBoard","Submissions","Alerts & Notifications","Milestones", "Resources", "TestCase"].map((badge) => (
              <button
                key={badge}
                className={`${styles.badge} ${selectedBadge === badge ? styles.selected : ""}`}
                onClick={() => handleBadgeClick(badge)}
              >
                {badge}
              </button>
            ))}
                </div>
                <div className={styles.down}>
                     <button>Logout</button>
                </div>

              </div>
              {/* {showDashBoard && <Dashboard  users={users} reviews={reviews} restaurants ={restaurants} />}
              {showRestaurants && <RestaurantsAndBars restaurants ={restaurants} handleRefetchData = {handleRefetchData }  />}
              {showReviews && <AdminReviews reviews={reviews}  handleRefetchData = {handleRefetchData } />}
              {showUsers && <AdminUsers  users = {users} handleRefetchData = {handleRefetchData } />}
              */}
              
            </div>
            
        </div>
    
     )
}
export default InstructorDashboard;