import React from 'react';

export default class TickIC extends React.Component {
  render() {
    var strokeColor = this.props.strokeColor;
    return (
      <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
<path fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
  M19.59,12.315c0,1.735,1.408,3.147,3.148,3.147v2.871H1.262v-2.871c1.74,0,3.148-1.412,3.148-3.147c0-1.74-1.409-3.148-3.148-3.148
  V6.296h21.476v2.871C20.998,9.167,19.59,10.575,19.59,12.315z"/>
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="7.431" y1="10.262" x2="15.092" y2="10.262"/>
<line fill="none" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="7.431" y1="14.273" x2="12" y2="14.273"/>
      </svg>
    )
  }
}