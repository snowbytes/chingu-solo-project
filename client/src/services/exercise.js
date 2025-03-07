const exerciseService = { create, getAll, remove };
export default exerciseService;

const BASE_URL = "/v1/api/exercises";

function getAll() {
  return fetch(BASE_URL).then((response) => response.json());
}

function create(exercise) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(exercise),
    headers: { "Content-Type": "application/json" },
  });
}

function remove(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
