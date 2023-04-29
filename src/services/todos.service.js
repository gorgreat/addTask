import httpService from "./http.servise";

const todoEndPoint = "todos/";

const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todoEndPoint, {
            params: {
                _page: 1,
                _limit: 10
            }
        });
        return data
    },
    addOneTask: async () => {
        const { data } = await httpService.post(todoEndPoint, {
            title: "Создал новый таск It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is",
            completed: true,
            id: "123"
        });
        return data;
    }
}

export default todosService;
