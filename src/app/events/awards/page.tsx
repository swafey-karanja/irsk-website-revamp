import React from "react";
import AwardsSection from "./sections/AwardsSection";
import Hero from "@/components/Hero";

const AwardsPage = () => {
  return (
    <div>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="h-[50vh]"
      />
      <AwardsSection />
    </div>
  );
};

export default AwardsPage;
