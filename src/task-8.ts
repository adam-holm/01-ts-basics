import axios from "axios";

// 1. Створюємо інтерфейс Post
interface Post {
  id: number;
  title: string;
  body: string;
}

// 2. Типізуємо функцію (вона повертає проміс із масивом постів)
async function fetchPosts(): Promise<Post[]> {
  // 3. Типізуємо axios.get через дженерик <Post[]>
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
}

// Викликаємо і перевіряємо
fetchPosts().then((posts) => {
  // Спробуй тут навести на 'title' — VS Code покаже, що це string
  console.log("Заголовок першого поста:", posts[0].title);
});
