import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Photo} from "../entity/Photo";
import { PhotoMetadataController } from "./PhotoMetadataController";

export class PhotoController {

    private photoRepository = getRepository(Photo);// getRepository ?

    async all(request: Request, response: Response, next: NextFunction) {
        return this.photoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.photoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        if (request.body.metaData) {
            const {metaData, ...photo} = request.body;
            const newPhoto = await this.photoRepository.save(photo);
            const newMetaData = await PhotoMetadataController.save({
                ...metaData,
                photo
            });

            return {
                photo: newPhoto,
                medaData: newMetaData,
            }
        }

        return this.photoRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.photoRepository.findOne(request.params.id);
        await this.photoRepository.remove(userToRemove);
    }

}