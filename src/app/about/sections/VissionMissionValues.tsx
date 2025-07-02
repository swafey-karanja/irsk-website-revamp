"use client";

import React from "react";
import { Heart, Users, Target, Shield } from "lucide-react";
import Header from "@/components/Header";

const VisionMissionValues = () => {
  const coreValues = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Integrity",
      description:
        "A vibrant professional body that is a trusted interlocutor on international relations and diplomacy issues in Kenya and beyond.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Neutrality",
      description:
        "We strive for a policy neutral, non-partisan approach to our operations.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Inclusiveness",
      description:
        "We make sure to foster and promote broad and diverse membership.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Professionalism",
      description:
        "We strive to promote professional excellence and competence.",
    },
  ];

  return (
    <section className="py-16 px-4 border-b-12 border-gray-600/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Header */}
          <Header title="About IRSK" underlineColor="bg-orange-400" />

          <p className="text-sm md:text-md lg:text-lg font-light text-slate-600 leading-relaxed max-w-7xl mx-auto">
            The International Relations Society of Kenya (IRSK) serves as a
            forum for exchanging ideas, networking and programmatic initiatives
            among those involved in the study, teaching and practice of
            international relations and diplomacy. In fulfilling our primary
            role as the hub for international relations and diplomacy
            professionals, we work to promote interest in the field, develop
            expertise and understanding of global issues, connect the IRSK
            community, and support our membership in fulfilling their ambitions.
            To this end, the Society is committed to nurturing new generations
            of global-minded leaders and supporting initiatives geared towards
            making the world a more peaceful, safe and prosperous place.
          </p>
          <div className="mt-8 flex justify-center">
            <div
              className="w-16 h-1 bg-coral-400"
              style={{ backgroundColor: "#ff7f7f" }}
            ></div>
          </div>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Vision */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-slate-600 mb-6">
              Vision
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A vibrant professional body that is a trusted interlocutor on
                international relations and diplomacy issues in Kenya and
                beyond.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-slate-600 mb-6">
              Mission
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                IRSK&apos;s mission is to serve as a policy-neutral platform
                through which a community of international relations and
                diplomacy practitioners, experts and scholars will be actively
                involved in continuous learning, engagement and knowledge
                sharing.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-slate-600 mb-6">
              Core Values
            </h3>
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 bg-coral-400 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#ff7f7f" }}
                  >
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-700 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
