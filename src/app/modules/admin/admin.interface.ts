import { Model } from 'mongoose';

export interface TAdmin{
  name: string
}

export interface AdminModel extends Model<TAdmin> {}
