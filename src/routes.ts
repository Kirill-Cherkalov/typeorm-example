import {UserController} from "./controller/UserController";
import { PhotoController } from "./controller/PhotoController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/photo",
    controller: PhotoController,
    action: "all"
}, {
    method: "get",
    route: "/photo/:id",
    controller: PhotoController,
    action: "one"
}, {
    method: "post",
    route: "/photo",
    controller: PhotoController,
    action: "save"
}, {
    method: "delete",
    route: "/photo/:id",
    controller: PhotoController,
    action: "remove"
}];