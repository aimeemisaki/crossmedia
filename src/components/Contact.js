import React from 'react';
import koi from './media/koi.mp4';

function Contact() {
	return (
		<>
		<video id="contact-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src={koi}>
  		</video>
        </>
	);
};

export default Contact;