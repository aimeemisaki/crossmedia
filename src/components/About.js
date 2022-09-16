import React from 'react';
import './styles/About.css';
import { Card } from 'react-bootstrap'

function About() {
	return (
		<>
		<video id="about-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-forest-covered-by-mist-at-sunrise-from-the-heights-28339-large.mp4">
  		</video>
		  <div class="grid place-items-center h-screen">
		<Card id="viewport-header">
		  <header>
				<h1 id='about-header'>
					ABOUT US
				</h1>
				<h2 class="about-text">At Cross Media, we are dedicated to spreading awareness of the beauties of Japan's history to people from around the world. Our goal is to teach global visitors two of the most important foundations of ancient and present-day Japanese culture, such as <i>Shodo</i> (書道) and <i>Bonsai</i> (盆栽).</h2>
		</header>
		</Card>
		</div>
        </>
	);
};

export default About;