import React, { useRef, useState } from 'react';
import Sound from './icons/sound';
import SoundOff from './icons/soundOff';
import Movie from './icons/movie';

interface SliderProps {
	title: string;
    video: string;
}

const Slider: React.FC<SliderProps> = ( { title, video } ) => {

	const videoRef = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
			setIsMuted(videoRef.current.muted);
		}
	};

	return (
		<div className="relative h-[50vh] w-full flex flex-col justify-end mb-20 lg:h-screen">
			<video
			ref={videoRef}
			className="absolute top-0 left-0 w-full h-full object-cover"
			autoPlay
			loop
			muted
			playsInline
			>
				<source src={video} type="video/mp4" />
					Your browser does not support the video tag.
			</video>
			<div className="container mx-auto">
				<div className="relative z-10 py-4 px-4 lg:py-20">
					<div className="relative">
						<h2 className="text-white text-4xl font-400 lg:text-6xl " dangerouslySetInnerHTML={{ __html: title }} />
						<div className="flex items-end gap-5 absolute bottom-0 right-0">
							<button
								onClick={toggleMute}
								className="bg-gray-300 py-2 px-4 rounded-full w-[80px] h-[80px] flex flex-col justify-center items-center border-white border-2 hover:border-[#006CB7]"
							>
								{isMuted ? <SoundOff /> : <Sound />}
							</button>
							<button
								onClick={toggleMute}
								className="bg-gray-300 py-2 px-4 rounded-full w-[64px] h-[64px] flex flex-col justify-center items-center border-white border-2 hover:border-[#006CB7]"
							>
								<Movie />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
