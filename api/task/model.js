// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
};

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(() => {
      return getResource;
    });
}

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projects");
}
function getTasks() {}
