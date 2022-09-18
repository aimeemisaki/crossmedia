import React from 'react';

function Schedule() {
	return (
		<>
		<video id="schedule-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-of-a-lake-seen-up-18312-large.mp4">
  		</video>
		<div class="grid place-items-center h-screen">
			<div id="schedule-container" class="rounded-md h-96 w-64 md:h-64 md:w-96">
				<header>
					<h1 id='schedule-header' class="pb-3 md:pb-14">
						ANNOUNCEMENT 
					</h1>
					<h2 class="schedule-text">Due to COVID-19 and health concerns, we will unfortunately be cancelling all events, workshops and classes until further notice. We apologize for any inconvenience this may cause. Thank you for your patience and understanding.</h2>
				</header>
			</div>
		</div>
        </>
	);
};

export default Schedule;