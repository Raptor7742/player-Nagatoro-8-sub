const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 8 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m103.syncusercontent.com/mfs-60:1635d70ca14d01ea4809fcd6dd1a3636=============================/p/épisode%208.mp4?allowdd=0&datakey=aBYEM0wi3KcJWOqu3DanyFM2QNlDiXee5nLfNkCr6+ZxOOftxEHC7CKjJ8QZ4BDkxBCY76/uy366rryx4Pm4WVH0AbT88FfKogdJTpj2tZ3pbEdrHvID1NRqzeqX8dr0Z1tr8K0L6DcVX7jzNx+41pPzL7j9xcObvUVyzHXgkEuM1lddSiFZ5w7khOOaZazK43RlIS6e2rZsbTVAs1uR4XX6koNxbIqKNcxZOAn0mmYpjMEKgeHhQOsQ817u1wxdXpdnTxcDFPEEfxePKERu0KzA+kfn4JI3caWd2ZDm5Kroaf6PEsAhqT9Ej8lc+LDekVgqb5cTvDky2A7XKznLKg&engine=ln-2.3.7.3&errurl=JWLHJ0uoGoiibnN4A1xKdauOFVfmPIVEgJ5KkyESlqHC4HGDbD5XMAgZGTMtdwTrWn3A/2NqZgocDdnx5rrTJyZS4DaU+Xee0/cf6w6zldCmQx+jHnO7Q7rRiYqk4HaqOgXEc3LOkbmYKJwu5hpnZ/uyKUqEAe2TxFobmJbst0Vsu94W4YP0O5JU99FiVfvdATwAaOoGXpcykaFXCo4u9LV9mpxAxeBTjyPGD0areoyYhUlapeE1VJXBZYc5xK2VZFSSZqnOWJweIDSIJhGH3pFQw9pZT+IZ9GE7O+8j3ro5VmZuU8zety/eSJgPpf+LGIKSMvLAdhP0Q0gAAh4hSw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwOC5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnJUMzJUE5cGlzb2RlJTIwOC5tcDQ7&ipaddress=1458994159&linkcachekey=a62fa84b0&linkoid=1760620003&mode=101&sharelink_id=11936196810003&timestamp=1672609403758&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=d65d57579b1042c071e494342bb697b08b45e3e1&cachekey=60:1635d70ca14d01ea4809fcd6dd1a3636=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
