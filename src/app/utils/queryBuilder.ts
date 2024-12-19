import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
	private modelQuery: Query<T[], T>;
	private query: Record<string, unknown>;

	constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
		this.modelQuery = modelQuery;
		this.query = query;
	}

	public search(fields: string[]): this {
		const searchTerm = this.query.searchTerm as string;
		if (searchTerm) {
			this.modelQuery = this.modelQuery.find({
				$or: fields.map((field) => ({
					[field]: { $regex: searchTerm, $options: "i" },
				})),
			} as FilterQuery<T>);
		}
		return this;
	}

	public filter(): this {
		const excluded = [
			"searchTerm",
			"page",
			"limit",
			"sortBy",
			"sortOrder",
			"fields",
		];
		const filters = Object.fromEntries(
			Object.entries(this.query).filter(([key]) => !excluded.includes(key)),
		);
		this.modelQuery = this.modelQuery.find(filters as FilterQuery<T>);
		return this;
	}

	public paginate(): this {
		const page = Number(this.query.page) || 1;
		const limit = Number(this.query.limit) || 10;
		const skip = (page - 1) * limit;
		this.modelQuery = this.modelQuery.skip(skip).limit(limit);
		return this;
	}

	public sort(): this {
		const sortBy = this.query.sortBy as string;
		const sortOrder = this.query.sortOrder === "desc" ? "-" : "";
		if (sortBy) {
			this.modelQuery = this.modelQuery.sort(`${sortOrder}${sortBy}`);
		}
		return this;
	}

	public select(): this {
		const fields =
			(this.query.fields as string)?.split(",").join(" ") || "-__v";
		this.modelQuery = this.modelQuery.select(fields);
		return this;
	}

	public build(): Query<T[], T> {
		return this.modelQuery;
	}

	// countTotal method to get pagination and total count
	public async countTotal(): Promise<{
		page: number;
		limit: number;
		total: number;
		totalPage: number;
	}> {
		const totalQueries = this.modelQuery.getFilter();
		const total = await this.modelQuery.model.countDocuments(totalQueries);
		const page = Number(this?.query?.page) || 1;
		const limit = Number(this?.query?.limit) || 10;
		const totalPage = Math.ceil(total / limit);

		return {
			page,
			limit,
			total,
			totalPage,
		};
	}
}

export default QueryBuilder;
