import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config({path:"../.env"});
console.log(process.env.MONGODB_URI);

const songs = [
	// {
	// 	title: "Stay With Me",
	// 	artist: "Sarah Mitchell",
	// 	imageUrl: "/cover-images/1.jpg",
	// 	audioUrl: "/songs/1.mp3",
	// 	duration: 46, // 0:46
	// },
	// {
	// 	title: "Midnight Drive",
	// 	artist: "The Wanderers",
	// 	imageUrl: "/cover-images/2.jpg",
	// 	audioUrl: "/songs/2.mp3",
	// 	duration: 41, // 0:41
	// },
	// {
	// 	title: "Lost in Tokyo",
	// 	artist: "Electric Dreams",
	// 	imageUrl: "/cover-images/3.jpg",
	// 	audioUrl: "/songs/3.mp3",
	// 	duration: 24, // 0:24
	// },
	// {
	// 	title: "Summer Daze",
	// 	artist: "Coastal Kids",
	// 	imageUrl: "/cover-images/4.jpg",
	// 	audioUrl: "/songs/4.mp3",
	// 	duration: 24, // 0:24
	// },
	// {
	// 	title: "Neon Lights",
	// 	artist: "Night Runners",
	// 	imageUrl: "/cover-images/5.jpg",
	// 	audioUrl: "/songs/5.mp3",
	// 	duration: 36, // 0:36
	// },
	// {
	// 	title: "Mountain High",
	// 	artist: "The Wild Ones",
	// 	imageUrl: "/cover-images/6.jpg",
	// 	audioUrl: "/songs/6.mp3",
	// 	duration: 40, // 0:40
	// },
	// {
	// 	title: "City Rain",
	// 	artist: "Urban Echo",
	// 	imageUrl: "/cover-images/7.jpg",
	// 	audioUrl: "/songs/7.mp3",
	// 	duration: 39, // 0:39
	// },
	// {
	// 	title: "Desert Wind",
	// 	artist: "Sahara Sons",
	// 	imageUrl: "/cover-images/8.jpg",
	// 	audioUrl: "/songs/8.mp3",
	// 	duration: 28, // 0:28
	// },
	// {
	// 	title: "Ocean Waves",
	// 	artist: "Coastal Drift",
	// 	imageUrl: "/cover-images/9.jpg",
	// 	audioUrl: "/songs/9.mp3",
	// 	duration: 28, // 0:28
	// },
	{
		title: "Starlight",
		artist: "Luna Bay",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/10.mp3",
		duration: 30, // 0:30
	},
	{
		title: "Winter Dreams",
		artist: "Arctic Pulse",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/11.mp3",
		duration: 29, // 0:29
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/12.mp3",
		duration: 17, // 0:17
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/13.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/14.mp3",
		duration: 27, // 0:27
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/15.mp3",
		duration: 36, // 0:36
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/16.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/17.mp3",
		duration: 39, // 0:39
	},
	{
		title: "Midnight Blues",
		artist: "Jazz Cats",
		imageUrl: "../../../frontend/public/cover-images/1.jpg",
		audioUrl: "../../../frontend/public/songs/18.mp3",
		duration: 29, // 0:29
	},
];

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();