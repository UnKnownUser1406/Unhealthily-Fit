import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <div>
          <p>1. Elevate your fitness game with this high-intensity interval training (HIIT) session that torches calories and builds lean muscle in just 30 minutes!</p>
          <p>2. Push your limits with this total-body strength workout designed to tone, sculpt, and boost endurance using compound movements.</p>
          <p>3. Unlock your flexibility and core strength with this dynamic yoga flow, perfect for improving balance and reducing stress.</p>
        </div>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Explore our specially curated workout programs designed to help you achieve your fitness goals. From beginner-friendly routines to advanced challenges, our bootcamps are tailored to push you further, faster. Check out these top sessions and find the perfect fit for your journey.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Beginner Yoga Bootcamp</h4>
            <p>
              Build flexibility and strength with this 4-week yoga bootcamp, perfect for newcomers looking to enhance their balance and reduce stress. Embrace the flow and feel more centered with every session.
            </p>
          </div>
          <div>
            <h4>Strength Training Intensive</h4>
            <p>
              Take your strength to new levels with this intense 6-week program. Designed to increase muscle mass and endurance, it focuses on compound movements and progressive overload.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Challenge</h4>
            <p>
              Burn calories fast and improve your stamina with our high-energy Cardio Blast. This 30-day challenge incorporates interval training to keep your heart rate up and your metabolism revved.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>
              Improve your overall fitness with a focus on functional movements. This bootcamp will enhance your agility, coordination, and strength to help you in everyday activities.
            </p>
          </div>
        </div>
        <button className="join-now-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          BMI CALCULATOR
        </button>
      </div>
    </section>
  );
};

export default WorkoutSessions;
