import React from "react";
import ReactApexChart from "react-apexcharts";
import "./index.css";
import { apexOptions } from "./apexOptions";

export default function QcDetails() {
  return (
    <div className="jio">
      <div className="jio_page">
        <div className="jio_row1">
          <div className="j_row1">Ninja-Cart </div>
          <div className="j_row2 j-row-back-btn">
            <img src={window.location.origin+"/images/back.svg"} alt="back button"/>
            <div className="j-back-text">Back</div>
            {/* <p className="jio_p1">Back</p> */}
          </div>
        </div>
        <div className="jio_row1">
          <div className="jio_row2">
            <div className="jio_box">
              <p className="j_p1">Lead ID:</p>
              <p className="j_p2">1256</p>
            </div>
          </div>
          <div className="jio_row3">
            <div className="j_row3">
              <div className="j_box1">
                <p className="j_p3">Merchant contact number</p>
                <p className="j_p4">XXXXXXXX01</p>
              </div>
              <div className="j_box2 my-call-row">
                <p className="j_p5">CALL</p>
                <img
                  src={window.location.origin + "/images/call.svg"}
                  alt="call"
                  className="call_home"
                />
              </div>
            </div>
            <div className="j_row3">
              <div className="j_box1">
                <p className="j_p3">FSE contact number</p>
                <p className="j_p4">XXXXXXXX02</p>
              </div>
              <div className="j_box2 my-call-row">
                <p className="j_p5">CALL</p>
                <img
                  src={window.location.origin + "/images/call.svg"}
                  alt="call"
                  className="call_home"
                />
              </div>
            </div>
          </div>
          <div className="jio_row4">
            <div className="jio_col1">
              <div className="j_row4">
                <div className="j_row3">
                  <div className="j_box3">
                    <p className="j_p9">Shop name</p>
                    <p className="j_p15">Shop name</p>
                  </div>
                  <div className="j_boxes">
                    <p className="j_yes">yes</p>
                    <p className="j_yes">no</p>
                  </div>
                </div>
                <div className="row_note1">
                  <p className="note_name">note:</p>
                  <p className="note_stats">
                    Check and match the shop name with proof of business and
                    shop image
                  </p>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_row5">
                  <div className="j_box3">
                    <p className="j_p9">Sategory</p>
                    <p className="j_p15">Provision store/others</p>
                  </div>
                  <div className="j_boxes">
                    <p className="j_yes">yes</p>
                    <p className="j_yes">no</p>
                  </div>
                </div>
                <div className="row_note1">
                  <p className="note_name">note:</p>
                  <p className="note_stats">
                    Check is this category is matching with the uploaded proof
                    of business image
                  </p>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_proof">
                  <p className="j_p9">Proof of business image</p>
                  <p className="j_p10">Provision store/others</p>
                  <div className="j_row6">
                    <div className="j_col1">
                      <p className="j_p11">Shop image</p>
                      <div className="j_col2">
                        <div className="j_dotted">
                          <img
                            src={
                              window.location.origin +
                              "/Adhaar/Mask Group 87.svg"
                            }
                            alt="call"
                            className="proof_image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="j_col1">
                      <p className="j_p11">Proof of business</p>
                      <div className="j_col2">
                        <div className="j_dotted">
                          <img
                            src={window.location.origin + "/invoice.png"}
                            alt="call"
                            className="proof_image"
                          />
                        </div>
                      </div>
                      <div className="j_row7">
                        <p className="j_p12">Document format:</p>
                        <p className="j_p13">Distributor bill</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_row5">
                  <div className="j_box3">
                    <p className="j_p9">Merchant aadhar number</p>
                    <p className="j_p10">1224 5678 9900</p>
                  </div>
                  <div className="j_boxes">
                    <p className="j_yes">yes</p>
                    <p className="j_yes">no</p>
                  </div>
                </div>
                <div className="row_note1">
                  <p className="note_name">note:</p>
                  <p className="note_stats">
                    Verify aadhar number with the images
                  </p>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_proof">
                  <p className="j_p9">Merchant aadhar number</p>
                  <p className="j_p10">1224 5678 9900</p>
                  <div className="j_row6">
                    <div className="j_col1">
                      <p className="j_p11">Aadhar front image</p>
                      <div className="j_col2 aadhar-container">
                        
                          <img
                            src={
                              window.location.origin +
                              "/images/aadhar-front.svg"
                            }
                            alt="aadhar front"
                            className="proof_image aadhar-img"
                          />
                        
                      </div>
                    </div>
                    <div className="j_col1">
                      <p className="j_p11">Aadhar back image</p>
                      <div className="j_col2 aadhar-container">
                        
                          <img
                            src={
                              window.location.origin +
                              "/images/aadhar-back.svg"
                            }
                            alt="aadhar front"
                            className="proof_image aadhar-img"
                          />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_row5">
                  <div className="j_box3">
                    <p className="j_p9">MID number</p>
                    <p className="j_p10">123df4567890346</p>
                  </div>
                  <div className="j_boxes">
                    <p className="j_yes">yes</p>
                    <p className="j_yes">no</p>
                  </div>
                </div>
                <div className="row_note1">
                  <p className="note_name">note:</p>
                  <p className="note_stats">
                    Verify the MID,is this same as in the profile screen
                  </p>
                </div>
              </div>
              <div className="j_row4">
                <div className="j_proof">
                  <p className="j_p9">Profile image</p>
                  <p className="j_p14">Customer profile image</p>
                  <div className="j_row8">
                    <div className="j_col1">
                      <div className="j_col2">
                        <div className="j_dotted">
                          <img
                            src={
                              window.location.origin +
                              "/Adhaar/Mask Group 87.svg"
                            }
                            alt="call"
                            className="proof_image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="jio_col2">
              <div className="jio_note">
                <p className="j_p6">remarks</p>
                <div className="j_p8">
                  <p className="j_p7">QC 1(lead ID)</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate earum eius, quo libero a quod quis maiores quos
                    beatae. Rem accusamus, ipsam architecto similique nam quas
                    mollitia nemo suscipit explicabo.
                  </p>
                </div>
                <div className="j_p8">
                  <p className="j_p7">QC 2(lead ID)</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate earum eius, quo libero a quod quis maiores quos
                    beatae. Rem accusamus, ipsam architecto similique nam quas
                    mollitia nemo suscipit explicabo.
                  </p>
                </div>
              </div>
              <div className="jio_score">
                <p className="j_p6">score: </p>
                <ReactApexChart
                  options={apexOptions}
                  series={apexOptions.series}
                  type="radialBar"
                  height={250}
                />

                <div className="j_p8" style={{ opacity: "0.3" }}>
                  <p className="j_p7">Comment</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate earum eius, quo libero a quod quis maiores quos
                    beatae. Rem accusamus, ipsam architecto similique nam quas
                    mollitia nemo suscipit explicabo.
                  </p>
                </div>
                <div className="jio_check">
                  <label className="form-check-label" for="check2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check2"
                      name="option2"
                      value="something"
                    />
                    <p className="j_p16">Mark this as face onboarding</p>
                  </label>
                </div>
                <div className="j_buttons">
                  <input type="button" className="j_button" value="Approve" />
                  <input type="button" className="j_button" value="Reject" />
                  <input type="button" className="j_button" value="Redo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

