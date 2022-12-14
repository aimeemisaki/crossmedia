import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './styles/Bonsai.css'



function Bonsai() {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<div class="bonsai-bg">
			<div class="grid grid-cols-4 gap-4 mx-3 my-3">
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						onClick={handleShow}
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
						
							<Modal id="modal" show={show} onHide={handleClose} 
								size="lg"
								aria-labelledby="contained-modal-title-vcenter"
								centered
								>
								<Modal.Header id="modal-header" closeButton>
								</Modal.Header>
								<div id="vid-container" class="grid place-items-center h-screen">
										<iframe id="yt-vid" width="560" height="315" src="https://www.youtube.com/embed/RqztYFTBXEc" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										<h2>Naomi (2022)</h2>
									</div>
							</Modal>
						</div>
				
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				<div>
					<figure class="relative max-w-md transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
						<img 
						class="rounded-lg" 
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
						alt="naomi poster"
						/>
						<figcaption class="absolute bottom-6 px-4 text-lg text-center text-transparent md:text-white">
							<p>Feature on Naomi (2022)</p>
						</figcaption>
					</figure>
				</div>
				
			</div>
        </div>
	);
};

export default Bonsai;