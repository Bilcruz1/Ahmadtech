import React from 'react';
import youtubethumbnail from '../assets/icons/youtube-thumbnail.png';

// YouTubeThumbnail Component
const YouTubeThumbnail = ({ videoId, height = '400px' }) => {
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // High Quality Thumbnail
	const videoUrl = `https://www.youtube.com/watch?v=${videoId}`; // YouTube video URL

	return (
		<a
			href={videoUrl}
			target="_blank"
			rel="noopener noreferrer"
			className={`relative block cursor-pointer`}
			style={{ height }}
		>
			<img
				src={thumbnailUrl}
				alt="YouTube Thumbnail"
				className="w-full h-full object-cover rounded-2xl"
			/>
			<div className="absolute inset-0 flex items-center justify-center">
				<img
					src={youtubethumbnail}
					alt="Play Button"
					className="h-16 w-16 opacity-80"
				/>
			</div>
		</a>
	);
};

export default YouTubeThumbnail;
