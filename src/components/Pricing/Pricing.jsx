import React from "react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <>
      <div className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[600px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Pricing Structure
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] mb-6 text-dark">
                Simple and Transparent
              </h2>
              <p className="text-base text-body-color">
                We’re committed to providing clear and honest pricing with no
                hidden charges. Our range of flexible plans is tailored to meet
                various needs and budgets, ensuring you get the most value for
                your investment while maintaining transparency throughout.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg-custom overflow-y-scroll">
          <table className="min-w-full">
            <thead>
              <tr className="bg-custom-gradient  text-black">
                <th className="p-4 border" rowSpan="2">
                  Pages & Words <br />( Set Your Essay Length )
                </th>
                <th className="p-4 border" colSpan="10">
                  Deadline ( Choose Your Completion Time )
                </th>
              </tr>
              <tr className="bg-custom-gradient border text-black">
                <th className="p-4 text-center border">10 days</th>
                <th className="p-4 text-center border">7 days</th>
                <th className="p-4 text-center border">5 days</th>
                <th className="p-4 text-center border">4 days</th>
                <th className="p-4 text-center border">3 days</th>
                <th className="p-4 text-center border">48 hr</th>
                <th className="p-4 text-center border">24 hr</th>
                <th className="p-4 text-center border">12 hr</th>
                <th className="p-4 text-center border">6 hr</th>
                <th className="p-4 text-center border">3 hr</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">1 Page / 275 words *</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $2
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $4
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $6
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $8
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $10
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $12
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $14
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $16
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $18
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $20
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">2 Pages / 550 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $22
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $24
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $26
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $28
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $30
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $32
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $34
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $36
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $38
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $40
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">3 Pages / 825 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $42
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $44
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $46
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $48
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $50
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $52
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $54
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $56
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $58
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $60
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">4 Pages / 1100 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $62
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $64
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $66
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $68
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $70
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $72
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $74
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $76
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $78
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $80
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">5 Pages / 1375 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $82
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $84
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $86
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $88
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $90
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $92
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $94
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $96
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $98
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $100
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">6 Pages / 1650 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $102
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $104
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $106
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $108
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $110
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $112
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $114
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $116
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $118
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $120
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">7 Pages / 1925 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $122
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $124
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $126
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $128
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $130
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $132
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $134
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $136
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $138
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $140
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">8 Pages / 2200 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $142
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $144
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $146
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $148
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $150
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $152
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $154
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $156
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $158
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $160
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">9 Pages / 2475 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $162
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $164
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $166
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $168
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $170
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $172
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $174
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $176
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $178
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $180
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">10 Pages / 2750 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $182
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $184
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $186
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $188
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $190
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $192
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $194
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $196
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $198
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $200
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">11 Pages / 3025 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $175
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $180
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $185
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $190
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $195
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $200
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $205
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $210
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $215
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $220
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">12 Pages / 3300 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $195
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $200
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $205
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $210
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $215
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $220
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $225
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $230
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $235
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $240
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">13 Pages / 3575 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $215
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $220
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $225
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $230
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $235
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $240
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $245
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $250
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $255
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $260
                </td>
              </tr>
              <tr className="bg-white">
                <th className="p-4 font-bold border">14 Pages / 3850 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $235
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $240
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $245
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $250
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $255
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $260
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $265
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $270
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $275
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $280
                </td>
              </tr>
              <tr className="bg-gray-100">
                <th className="p-4 font-bold border">15 Pages / 4125 words</th>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $210
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $220
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $230
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $240
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $250
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $260
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $270
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $280
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $290
                </td>
                <td className="p-4 text-center border hover:bg-primary hover:text-white">
                  $300
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pt-6 lg:pt-12 pb-6 lg:pb-12">
        <div className="bg-custom-gradient py-8 lg:py-12 px-6 relative text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Take the Next Step Towards Your Academic Goals!
          </p>
          <p className="prose text-white lg:prose-lg xl:prose-2xl mx-auto">
            Effortlessly Elevate Your Academic Performance with Our Services!
          </p>
          <div className="h-12 w-12 bg-custom-gradient left-1/2 -ml-6 -bottom-6 absolute transform rotate-45">
            &nbsp;
          </div>
        </div>
        <div className="pt-12 lg:pt-16 text-center">
          <a
            href="/order"
            className="bg-[#a7325ef2] hover:bg-teal-700 transition ease-in-out duration-150 text-base text-white px-4 lg:px-8 py-4 inline-block font-bold rounded-md shadow-xl"
            data-aos="zoom-in"
          >
            Unlock Your Academic Success Today!
          </a>
        </div>
      </div> */}
    </>
  );
}

export default Pricing;
