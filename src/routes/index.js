import routesUser from "./userRoutes.js";
import areasUser from "./areaRouter.js";
const routesApi = (app) => {
  const routes = [routesUser, areasUser];
  routes.forEach((ruta) => {
    app.use("/api", ruta);
  });
};

export default routesApi;