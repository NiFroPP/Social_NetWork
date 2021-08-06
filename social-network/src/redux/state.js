const state = {
  postsPage: {
    posts: [
      { id: 1, message: "Hi", likesCount: 10 },
      { id: 2, message: "Hi, how are you?", likesCount: 2 },
      { id: 3, message: "Yo", likesCount: 3 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: "1", message: "Hi" },
      { id: "2", message: "Hi" },
      { id: "3", message: "Hello" },
      { id: "4", message: "Hello, Polina!" },
      { id: "5", message: "Hello, Sveta!" },
      { id: "6", message: "Hello, Ira!" },
      { id: "7", message: "Hello, Sasha!" },
      { id: "8", message: "Hello, Andrey!" },
      { id: "9", message: "Hello, Julia!" },
    ],
    users: [
      { id: "1", name: "Nick", messages: ["Hi", "Hello, Nick!"] },
      { id: "2", name: "Olga", messages: ["Hi", "Hello, Olga!"] },
      { id: "3", name: "Artem", messages: ["Hi", "Hello, Artem!"] },
      { id: "4", name: "Polina", messages: ["Hi", "Hello, Polina!"] },
      { id: "5", name: "Sveta", messages: ["Hi", "Hello, Sveta!"] },
      { id: "6", name: "Ira", messages: ["Hi", "Hello, Ira!"] },
      { id: "7", name: "Sasha", messages: ["Hi", "Hello, Sasha!"] },
      { id: "8", name: "Andrey", messages: ["Hi", "Hello, Andrey!"] },
      { id: "9", name: "Julia", messages: ["Hi", "Hello, Julia!"] },
    ],
  },

  navigation: [{ id: "posts" }, { id: "dialogs" }, { id: "news" }, { id: "music" }, { id: "settings" }],
};

export default state;
