import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import { PhotoMetadata } from "../entity/PhotoMetadata";

export class PhotoMetadataController {

    // private photoMetadataRepository = getRepository(PhotoMetadata);// getRepository ?

    // async all(request: Request, response: Response, next: NextFunction) {
    //     return this.photoMetadataRepository.find();
    // }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.photoMetadataRepository.findOne(request.params.id);
    // }

    static async save(data) {
        return getRepository(PhotoMetadata).save(data);
    }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.photoMetadataRepository.findOne(request.params.id);
    //     await this.photoMetadataRepository.remove(userToRemove);
    // }

}