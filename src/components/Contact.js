import React from 'react';
import koi from './media/koi.mp4';

function Contact() {
	return (
		<>
		<video id="contact-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src={koi}>
  		</video>
		<div class="grid place-items-center h-screen">
			<div id="contact-container" class="rounded-md h-96 w-64 md:h-64 md:w-96">
				<header>
					<h1 id='contact-header' class="pb-3 md:pb-14">
						CONTACT US
					</h1>
					<h2 class="about-text">
						crossmedia@gmail.com <br/> 
						〒153-0064 東京都目黒区下目黒5-35-3 <br/>
						〒153-0064 5-35-3 Shimomeguro, Meguro-ku, Tokyo<br/>
						080-9532-8154
					</h2>
					<h1 id='contact-header'class="pb-3 md:pb-14">
						SUBSCRIBE TO OUR NEWSLETTER
					</h1>
					<form
					method="POST"
					action="https://herotofu.com/start"
					enctype="multipart/form-data"
					>
						<label class="block mb-6">
							<span class="text-gray-300">EMAIL ADDRESS</span>
							<input
							name="email"
							type="email"
							class="
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
								placeholder-gray-600
								text-gray-300
							"
							placeholder="joe.smith@example.com"
							/>
						</label>
						<div class="mb-6">
							<button
							type="submit"
							class="
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
					</form>
				</header>
			</div>
		</div>
        </>
	);
};

export default Contact;