
const baseUrl = './photo-sphere-viewer/assets/';

const viewer = new PhotoSphereViewer.Viewer({
    container: 'viewer',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    navbar: 'zoom move gallery fullscreen',

    plugins: [
        PhotoSphereViewer.MarkersPlugin,
        [PhotoSphereViewer.GalleryPlugin, {
            thumbnailSize: { width: 100, height: 100 },
        }],
        [PhotoSphereViewer.VirtualTourPlugin, {
            positionMode: 'gps',
            renderMode: '3d',
        }],
    ],
});

const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);

virtualTour.setNodes([
    {
        id: '1',
        panorama: './IMG_6860.JPG',
        name: 'Коридор у входа',
        links: [{ nodeId: '2', gps: [-90, 20] }],
        gps: [-110, -40],
        markers: [
          {
            "id": "marker-1",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 5.2,
              "pitch": 0.084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "Кабинет Директора по производству",
              "position": "top center",
              "trigger": "hover"
            },
          },
          {
            "id": "marker-2",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 2.8,
              "pitch": 0.000084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "Приёмная",
              "position": "top center",
              "trigger": "hover"
            },
          },
          {
            "id": "marker-3",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 4.2,
              "pitch": 0.000084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "Выход",
              "position": "top center",
              "trigger": "hover"
            },
          }

        ],
    },
    {
        id: '2',
        panorama: './IMG_6820.JPG',
        name: 'Коридор 1',
        markers: [
          {
            "id": "marker-4",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 2.514,
              "pitch": 0.0000084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "Кабинет ОИИ",
              "position": "top center",
              "trigger": "hover"
            },
            content: "Отдел инженерных изысканий"
          },
          {
            "id": "marker-5",
            "image": baseUrl + "/pin-red.png",
            "position": {
              "yaw": 4.924,
              "pitch": 0.0000084
            },
            "size": {
              "width": 64,
              "height": 64
            },
            "anchor": "bottom center",
            "tooltip": {
              "content": "переговорная",
              "position": "top center",
              "trigger": "hover"
            },
          }
        ],
        links: [
          { nodeId: '1', gps: [210, 0] },
          { nodeId: '3', gps: [-380, 0] },
       
        ],
        gps: [110, 20]
    },
    {
      id: '3',
      panorama: './IMG_6822.JPG',
      name: 'Коридор 2',
      markers: [
        {
          "id": "marker-6",
          "image": baseUrl + "/pin-red.png",
          "position": {
            "yaw": 6.335,
            "pitch": 0.064
          },
          "size": {
            "width": 64,
            "height": 64
          },
          "anchor": "bottom center",
          "tooltip": {
            "content": "Туалет",
            "position": "top center",
            "trigger": "hover"
          },
        }
      ],
      links: [
        { nodeId: '2', gps: [-91, 0] },
        { nodeId: '4', gps: [40, 20] }
      ],
      gps: [-80.156168, 25.666623],
  },
  {
    id: '4',
    panorama: "./IMG_6819.JPG",
    name: 'Тех. отдел.',
    markers: [
        
        {
        "id": "marker-7",
        "image": "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-red.png",
        "position": {
          "yaw": -1.14,
          "pitch": -0.099
        },
        "size": {
          "width": "64",
          "height": "64"
        },
        "anchor": "bottom center",
        "tooltip": {
          "content": "Архив",
          "position": "top center",
          "trigger": "hover"
        },
      }
    ],
    links: [
      { nodeId: '3', gps: [-60, 0] },
      { nodeId: '5', gps: [135, 20] }
    ],
    gps: [-80.156168, 25.666623],
  },
  {
    id: '5',
    panorama: './IMG_6821.JPG',
    name: 'Серверная',
    markers: [
        
      {
      "id": "marker-5",
      "image": "https://photo-sphere-viewer-data.netlify.app/assets/pictos/pin-red.png",
      "position": {
        "yaw": 4.34,
        "pitch": -0.299
      },
      "size": {
        "width": "64",
        "height": "64"
      },
      "anchor": "bottom center",
      "tooltip": {
        "content": "Файловый сервер",
        "position": "top center",
        "trigger": "hover"
      },
    }
  ],
    links: [
      { nodeId: '4', gps: [85, 0] },
    ],
    gps: [-80.156168, 25.666623],
  }
], '1');