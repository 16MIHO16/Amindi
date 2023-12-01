import { useEffect, useState } from "react";
import {
  FaBars,
  FaMicrophone,
  FaVideoSlash,
  FaBell,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
} from "react-icons/fa";
import "./App.css";
import "./reset.css";
import Video from "./Video";

const link = [
  "https://www.youtube.com/watch?v=o6zb6_TTVWo",
  "https://www.youtube.com/watch?v=5UIhTNzyNTY",
  "https://www.youtube.com/watch?v=0HjYAtGBi9Y",
  "https://www.youtube.com/watch?v=CZWN13vgFl8",
  "https://www.youtube.com/watch?v=0_CTFm6Kh0s&t=732s",
];

const thumbnails = [
  "https://i.ytimg.com/vi/o6zb6_TTVWo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlE95Jc8TpFL7fKXbSvfuiJLeeFg",
  "https://i.ytimg.com/vi/5UIhTNzyNTY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3frRR5jR-loQc2TR49QP63YBZ1Q",
  "https://i.ytimg.com/vi/0HjYAtGBi9Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAX6RBsOccypbMJ3_XAZOY8bdm5Pg",
  "https://i.ytimg.com/vi/CZWN13vgFl8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC4XNp7BUHnN7YNiIy2NBzcJvqETQ",
  "https://i.ytimg.com/vi/0_CTFm6Kh0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDrpCUN8SHLoYW82h3Lk1umsYIcOA",
];

const titles = [
  "Stranded in Alaska's Rainforest - 3 Days Solo camping",
  "ბოლო სეზონი - წამმზომი (სერია 1)",
  "FLIPPING THE TEMPLE | God Of War - Part 9",
  "მთვრალი GAMA-ნადგურებლები! ",
  "რომელია საუკეთესო ბურგერი?",
];

const channelName = [
  "Outdoor Boys",
  "ბოლო სეზონი - The Last Season",
  "jacksepticeye",
  "Rati's Bar",
  "Hungryman - ჰანგრიმენი",
];

const views = [
  "8.7M views",
  "290K views",
  "6.2M views",
  "242K views",
  "886K views",
];

function App() {
  return (
    <div className="youtube">
      <header>
        <FaBars className="bars" />
        <img
          className="youtubeLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
        />
        <input type="text" placeholder="Search" />
        <button className="SearchButton">Search</button>
        <FaMicrophone className="microphoneIcon" />
        <FaVideoSlash className="videoSlash" />
        <FaBell className="bell" />
        <img
          className="profilePicture"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
        />
      </header>
      <section>
        <div className="videoPlay">
          <iframe src="https://www.youtube.com/embed/FPl3Unb_pIA"></iframe>
          <div className="items">
            <h1>UFC Las Vegas : იანი VS დვალიშვილი</h1>
            <div className="channel">
              <img src="https://yt3.ggpht.com/-F3HAHjoY--zyQF9RpxbUL_OGiVMChnFjPKJ_0XaTXQRj9bgl3IXoTbfW1zUuLktrEMpP3oDVQ=s48-c-k-c0x00ffffff-no-rj" />
              <div className="channelTitile">
                <p className="channelName">Setanta Sports UFC</p>
                <p className="subscribers">173K subscribers</p>
              </div>
              <button className="subscribe">Subscribe</button>
              <button className="like">
                <FaThumbsUp />
              </button>
              <button className="dislike">
                <FaThumbsDown />
              </button>
              <button className="share">
                <FaShare /> Share
              </button>
              <FaDownload className="download" />
            </div>
          </div>
        </div>
        <div className="suggestedVideos">
          {link.map((p, i) => (
            <Video
              key={i}
              link={p}
              thumbnail={thumbnails[i]}
              title={titles[i]}
              channelName={channelName[i]}
              views={views[i]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
