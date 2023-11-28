
import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">Vị trí cửa hàng</h2>
        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125376.79782690622!2d106.66315616353083!3d10.885708093583634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527df6386f671%3A0x3e38a9079e4bb5cb!2zWW91U3BvcnQgVGjhu6cgxJDhu6lj!5e0!3m2!1sen!2s!4v1701051852004!5m2!1sen!2s" width="800" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;