import React from 'react';
import koi from './media/koi.mp4';
import './styles/Contact.css'

function Contact() {
	return (
		<>
		<video id="contact-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src={koi}>
  		</video>
		<div class="grid place-items-center h-screen">
			<div id="contact-container" class="rounded-md h-112 w-80  md:w-160">
				<header>
					<h1 id='contact-header' class="pb-3 md:pb-14">
						CONTACT US
					</h1>
					<h2 class="about-text leading-7">
						〒106-0041 Azabudai, Minato-ku, Tokyo, JAPAN<br/>
						03-5425-6854<br/>
						 
					</h2>
					<h2 class="about-text">crossmedia.jp@yahoo.com</h2>
					{/* <h1 id='subscribe-header'class="pb-3 md:pb-14">
						SUBSCRIBE TO OUR NEWSLETTER
					</h1>
					<form
					method="POST"
					action="https://herotofu.com/start"
					enctype="multipart/form-data"
					>
						<label class="block mb-6">
							<span 
							class=
							"contact-text text-gray-300">
								EMAIL ADDRESS
							</span>
							<input
							name="email"
							type="email"
							class=" 
								contact-text
								block
								w-full
								mt-1
								border-gray-600
								rounded-md
								shadow-sm
								focus:border-indigo-300
								focus:ring
								focus:ring-indigo-200
								focus:ring-opacity-50
								bg-transparent
								placeholder-gray-400
								text-gray-100
							"
							placeholder="joe.smith@example.com"
							/>
						</label>
						<div class="content-center">
							<button
							type="submit"
							class="
								contact-header
								h-10
								px-5
								text-slate-50
								bg-slate-700
								rounded-lg
								transition-colors
								duration-150
								focus:shadow-outline
								hover:bg-slate-900
							">
							SUBSCRIBE
							</button>
						</div>
					</form> */}
				</header>
			</div>
		</div>
        </>
	);
};

export default Contact;