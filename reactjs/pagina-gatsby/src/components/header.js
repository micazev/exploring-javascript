import { Link } from "gatsby"
import React from "react"

const Header = () => {
 var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 100) || 5000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        document.body.appendChild(css);
    };
  
  return(
  <header>
    <div className="container">
<div className="inner-header">
<div className="logo">
      <Link to="/">MICAZEV</Link>


      <h1>
 <b>Mic</b><a href="" class="typewrite" data-period="2000" data-type='[ "helle" ]'>
    <span class="wrap"></span>
  </a><b>azev</b><a href="" class="typewrite" data-period="2000" data-type='[ "edo  " ]'>
    <span class="wrap"></span>
  </a>
</h1>



    </div>
    <div className="navigation">
      <nav>
      <Link to="/about">SOBRE</Link>
      <Link to="/about">BLOG</Link>
      <Link to="/about">CONTATO</Link>
      </nav>
    </div>
</div>
    </div>
  </header>
) }

export default Header
