import routesUser from "./userRoutes.js";
const routesApi = (app) => {
  const routes = [routesUser];
  routes.forEach((ruta) => {
    app.use("/api", ruta);
  });
};

export default routesApi;