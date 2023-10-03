"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./time.css";

export default function Time() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="">
      <div className="mainn">
        <div className="timee  ">
          <h4 className="mb-4">Choose time</h4>
          <div className="timedv  ">
            <div className="calndr  ">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="w9t ">
              <div className="grid grid-cols-3 gap-4 ml-6  mb-4">
                <div className="bxsst lg:mb-6 md:mb-6  ">
                  <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="9am"
                    />
                    <label className="button-label" htmlFor="9am">
                      <h1>09:00</h1>
                    </label>
                  </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6  ">
                  <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="10am"
                    />
                    <label className="button-label" htmlFor="10am">
                      <h1>10:00</h1>
                    </label>
                  </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="11am"
                    />
                    <label className="button-label" htmlFor="11am">
                      <h1>11:00</h1>
                    </label>
                 </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="12am"
                    />
                    <label className="button-label" htmlFor="12am">
                      <h1>12:00</h1>
                    </label>
                 </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="14pm"
                    />
                    <label className="button-label" htmlFor="14pm">
                      <h1>14:00</h1>
                    </label>
                 </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="15pm"
                    />
                    <label className="button-label" htmlFor="15pm">
                      <h1>15:00</h1>
                    </label>
                 </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="17pm"
                    />
                    <label className="button-label" htmlFor="17pm">
                      <h1>17:00</h1>
                    </label>
                 </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="19pm"
                    />
                    <label className="button-label" htmlFor="19pm">
                      <h1>19:00</h1>
                    </label>
                </div>
                </div>
                <div className="bxsst lg:mb-6 md:mb-6 ">
                 <div className="button-wrap">
                    <input
                      className="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      id="20pm"
                    />
                    <label className="button-label" htmlFor="20pm">
                      <h1>20:00</h1>
                    </label>
                 </div>
                </div>
              </div>
              <div className="erp mb-4 ml-6">
                <h1>All times are in Eastern (Europe)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
