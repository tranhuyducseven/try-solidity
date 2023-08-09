import { NextRouter } from "next/router";

export type TPage = "home" | "auth" | "schema";

export interface IAppRouter {
  /**
   * Path of router
   */
  url: string;
  /**
   * Name of router
   */
  name: string;
  /**
   * True if router can access without login
   */
  //   public?: boolean;
  //   /**
  //    * True if router is show in sidebar
  //    */
  //   sidebar?: boolean;
  //   /**
  //    * Router's icon
  //    */
  //   icon?: ISvgComponent;
}

export type TRouter = { [key in TPage]: IAppRouter };

export const ROUTER: TRouter = {
  home: {
    url: "/",
    name: "Home",
  },
  auth: {
    url: "/auth",
    name: "Auth",
  },
  schema: {
    url: "/schema",
    name: "Schema",
  },
};

export const withRouterBuilder =
  (router: NextRouter) =>
  <T = unknown>(
    page: TPage,
    config?: {
      id?: string;
      mode?: T;
      query?: { [key: string]: string | number };
    }
  ) => {
    let route = `${ROUTER[page].url}`;
    if (config?.id) {
      route += `/${config.id}`;
    }
    if (config?.mode) {
      route += `/${config.mode}`;
    }
    if (config?.query) {
      const queryPath = Object.keys(config.query)
        .map((key) => {
          return `${key}=${config.query?.[key]}`;
        })
        .join("&");
      route += `?${queryPath}`;
    }
    return router.push(route);
  };
