const exerciseService = { getAll };
export default exerciseService;

const BASE_URL = "/v1/api/exercises";

function getAll() {
  return fetch(BASE_URL).then((response) => response.json());
}
