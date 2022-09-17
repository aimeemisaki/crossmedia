import React from 'react';
import './styles/About.css';

function About() {
	return (
		<>
		<video id="about-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-forest-covered-by-mist-at-sunrise-from-the-heights-28339-large.mp4">
  		</video>
		<div class="grid place-items-center h-screen">
			<div id="about-container" class="rounded-md h-96 w-64 md:h-64 md:w-96">
				<header>
					<h1 id='about-header' class="pb-3 md:pb-14">
						ABOUT US
					</h1>
					<h2 class="about-text">At <span class="cross-media">Cross Media</span>, we are dedicated to spreading awareness of the beauties of Japan's history to people from around the world. Our goal is to teach global visitors two of the most important foundations of ancient and present-day Japanese culture: <br/>
					<i>Shodo</i> (書道) and <i>Bonsai</i> (盆栽).</h2>
				</header>
			</div>
		</div>
        </>
	);
};

export default About;