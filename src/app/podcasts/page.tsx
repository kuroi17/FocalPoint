"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PodcastHeader from "@/components/podcasts/PodcastHeader";
import PodcastVideos, { VideoItem } from "@/components/podcasts/PodcastVideos";
import PodcastMiniPlayer from "@/components/podcasts/PodcastMiniPlayer";
import PodcastEpisodes, {
  EpisodeItem,
} from "@/components/podcasts/PodcastEpisodes";
import VideoModal from "@/components/podcasts/VideoModal";

export default function PodcastsPage() {
  const [currentEpisodeId, setCurrentEpisodeId] = useState<number | null>(4);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(true);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const episodesMap: Record<number, string> = {
    4: "Ep. 4: The commute, out loud · sample",
    3: "Ep. 3: Who decides what counts as news? · sample",
    2: "Ep. 2: Writing columns without shouting · sample",
    1: "Ep. 1: Meet the Focalcrews · sample",
  };

  const handleEpisodeSelect = (episode: EpisodeItem) => {
    if (currentEpisodeId === episode.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentEpisodeId(episode.id);
      setIsPlaying(true);
      setIsPlayerVisible(true);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTrackTitle = currentEpisodeId
    ? episodesMap[currentEpisodeId]
    : "Select an episode to play";

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226] selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Page Head: Breadcrumb, FOCAL TALK (210px), Subtitle with bold prompt, Fokie Mascot */}
        <PodcastHeader />

        {/* 3. Videos Section: Section Title & 3 Video Explainer Cards */}
        <PodcastVideos onVideoClick={(vid) => setActiveVideo(vid)} />

        {/* 4. Mini Player: Persistent player bar matching Figma 10:1176 */}
        {isPlayerVisible && (
          <PodcastMiniPlayer
            currentTrackTitle={currentTrackTitle}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onClose={() => setIsPlayerVisible(false)}
          />
        )}

        {/* 5. Episodes Section: List of Episodes with play controls and status badges */}
        <PodcastEpisodes
          currentEpisodeId={currentEpisodeId}
          isPlaying={isPlaying}
          onEpisodeSelect={handleEpisodeSelect}
        />
      </main>

      {/* 6. Video Viewer Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
}
