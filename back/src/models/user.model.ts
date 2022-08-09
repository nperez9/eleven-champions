import mongoose, { Document } from 'mongoose';
import { User, Roles } from '../interfaces';

export interface IUserModel extends User, Document {}

const userSchema = new mongoose.Schema({
	name: { type: String, required: true, max: 255 },
	email: { type: String, required: true, max: 255, index: { unique: true } },
	password: { type: String, required: true, max: 1024 },
	role: { type: String, required: true, default: Roles.USER },
	recoveryCode: { type: String, max: 2056 },
	createdAt: { type: Date, default: Date.now },
}, { strict: true });

const userModel = mongoose.model<IUserModel>('user', userSchema, 'users');

export default userModel;
