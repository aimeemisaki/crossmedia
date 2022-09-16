import React from 'react';

function Home() {
	return (
		<>
        <video id="home-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-woods-2212-large.mp4">
    		{/* <source src="https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-woods-2212-large.mp4" type="video/mp4"/> */}
  		</video>
		  <header id="viewport-header">
			<h1 id="viewport-h1">
				CROSS MEDIA <br /> JAPAN
			</h1>
		</header>
        </>
	);
};

export default Home;