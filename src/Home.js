import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/0ff51b14-a9fb-4956-9807-b394bf68f68e.jpg?im_w=720"
          title="Wild adventures"
          description="
                Experience Australian white sandy beaches, blue waters, and mountain tops."
        />
        <Card
          src="https://images.unsplash.com/photo-1601312044126-06d550c15beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGlueSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=720&q=60"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=720&h=400&q=60"
          title="3 Bedroom townhouse in Windsor"
          description="Superhost with a stunning view of the beachside in Sunny Windsor"
          price="$360/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=720&h=400&q=60"
          title="Penthouse in Richmond"
          description="Enjoy the amazing sights of Richmond with this stunning penthouse"
          price="$650/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=720&h=400&q=60"
          title="1 Bedroom apartment in Southbank"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$220/night"
        />
      </div>
    </div>
  );
};

export default Home;
