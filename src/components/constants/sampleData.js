export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Priyanshu",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Priyanshu",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Priyanshu",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Kya haal",
    _id: "sfadcsgabsagdbbss",
    sender: {
      _id: "user._id",
      name: "Priyanshu",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:40.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "sfadcsgabsagdbbsshf",
    sender: {
      _id: "csbcdmd",
      name: "Joe",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:40.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      username: "John_Doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "Priyanshu",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      username: "Priyanshu.7",
      friends: "9",
      groups: 1,
    },
  ],
  chats: [
    {
      name: "Class Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Priyanshu",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
    {
      name: "Project Delta",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 5,
      totalMessages: 40,
      creator: {
        name: "Priyanshu",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "Kya haal",
      _id: "sfadcsgabsagdbbss",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Priyanshu",
      },
      chat: "chatId", groupChat: false,
      createdAt: "2024-02-12T10:41:40.630Z",
    },
    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sfadcsgabsagdbbsshf",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Joe",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:40.630Z",
    },
  ],
};
