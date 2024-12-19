import { Model, Types } from "mongoose";

export interface IBlog {
	title: string;
	content: string;
	author: Types.ObjectId; // Referencing User model using ObjectId
	isPublished: boolean;
}

export interface BlogModel extends Model<IBlog> {}